import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, wishlistReducer } from "../reducers/wishlist-reducer";
axios.defaults.withCredentials = true;

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const fetchWishlist = async () => {
    const {
      data: { wishlist },
    } = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/v1/wishlist`);
    dispatch({ type: "GET_WISHLIST", payload: wishlist });
  };

  const addToWishlist = async (item) => {
    const {
      data: { data },
    } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/wishlist`, { id: item._id });
    dispatch({ type: "ADD_TO_WISHLIST", payload: data });
  };

  const moveToCart = (item) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/wishlist/${item._id}`);
    dispatch({ type: "MOVE_TO_CART", payload: item });
  };

  const removeFromWishlist = (item) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/wishlist/${item._id}`);
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
  };

  useEffect(() => {
    dispatch({ type: "CALCULATE_ITEMS_IN_WISHLIST" });
  }, [state.wishlist]);

  return <WishlistContext.Provider value={{ ...state, addToWishlist, moveToCart, removeFromWishlist, fetchWishlist }}>{children}</WishlistContext.Provider>;
};

const useWishlistContext = () => useContext(WishlistContext);

export { WishlistProvider, useWishlistContext };

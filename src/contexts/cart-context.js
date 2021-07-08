import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, cartReducer } from "../reducers/cart-reducer";

const CartContext = createContext();

const CartContextProdiver = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const fetchCart = async () => {
    const {
      data: { cart },
    } = await axios(`${process.env.REACT_APP_BACKEND_API}/api/v1/cart`);
    dispatch({ type: "GET_CART", payload: cart });
  };

  const addItemToCart = async (item) => {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1/cart`, {
      id: item._id,
    });
    dispatch({ type: "ADD_TO_CART", payload: res.data.data });
  };

  const incrementCartQty = (item) => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1/cart/${item._id}`, {
      qty: item.qty + 1,
    });
    dispatch({ type: "INCREMENT_CART_QTY", payload: item });
  };

  const decrementCartQty = (item) => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1/cart/${item._id}`, {
      qty: item.qty - 1,
    });
    dispatch({ type: "DECREMENT_CART_QTY", payload: item });
  };

  const removeFromCart = (item) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_API}/api/v1/cart/${item._id}`);
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    dispatch({ type: "GENERATE_TOTAL" });
  }, [state.cart]);

  return <CartContext.Provider value={{ ...state, addItemToCart, incrementCartQty, decrementCartQty, removeFromCart }}>{children}</CartContext.Provider>;
};

const useCartContext = () => useContext(CartContext);

export { CartContextProdiver, useCartContext };

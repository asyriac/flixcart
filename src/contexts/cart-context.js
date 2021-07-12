import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { initialState, cartReducer } from "../reducers/cart-reducer";
axios.defaults.withCredentials = true;

const CartContext = createContext();

const CartContextProdiver = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const fetchCart = async () => {
    const {
      data: { cart },
    } = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`);
    dispatch({ type: "GET_CART", payload: cart });
  };

  const addItemToCart = async (item) => {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`, {
      id: item._id,
    });
    dispatch({ type: "ADD_TO_CART", payload: res.data.data });
  };

  const incrementCartQty = (item) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${item._id}`, {
      qty: item.qty + 1,
    });
    dispatch({ type: "INCREMENT_CART_QTY", payload: item });
  };

  const decrementCartQty = (item) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${item._id}`, {
      qty: item.qty - 1,
    });
    dispatch({ type: "DECREMENT_CART_QTY", payload: item });
  };

  const removeFromCart = (item) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${item._id}`);
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const placeOrder = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/order`);
    dispatch({ type: "PLACE_ORDER" });
    toast.success("Order placed", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    dispatch({ type: "GENERATE_TOTAL" });
  }, [state.cart]);

  return <CartContext.Provider value={{ ...state, addItemToCart, incrementCartQty, decrementCartQty, removeFromCart, fetchCart, placeOrder }}>{children}</CartContext.Provider>;
};

const useCartContext = () => useContext(CartContext);

export { CartContextProdiver, useCartContext };

import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, cartReducer } from '../reducers/cart-reducer'

const CartContext = createContext();

const CartContextProdiver = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addItemToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: item })
    }

    const incrementCartQty = (item) => {
        dispatch({ type: "INCREMENT_CART_QTY", payload: item })
    }

    const decrementCartQty = (item) => {
        dispatch({ type: "DECREMENT_CART_QTY", payload: item })
    }

    const removeFromCart = (item) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }

    useEffect(() => {
        dispatch({ type: "GENERATE_TOTAL" })
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addItemToCart, incrementCartQty, decrementCartQty, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext);

export { CartContextProdiver, useCartContext };
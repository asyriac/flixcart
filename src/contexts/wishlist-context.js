import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, wishlistReducer } from "../reducers/wishlist-reducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {


    const [state, dispatch] = useReducer(wishlistReducer, initialState)

    const addToWishlist = (item) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: item })
    }

    const moveToCart = (item) => {
        dispatch({ type: "MOVE_TO_CART", payload: item })
    }

    const removeFromWishlist = (item) => {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
    }

    useEffect(() => {
        dispatch({ type: "CALCULATE_ITEMS_IN_WISHLIST" })
    }, [state.wishlist])

    return (
        <WishlistContext.Provider value={{ ...state, addToWishlist, moveToCart, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlistContext = () => useContext(WishlistContext);

export { WishlistProvider, useWishlistContext }
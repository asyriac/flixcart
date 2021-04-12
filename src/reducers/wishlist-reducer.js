

const initialState = {
    wishlist: [],
    wishlistQty: 0
}

const wishlistReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.concat(action.payload)
            }
        case "MOVE_TO_CART":
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.id !== action.payload.id)
            }
        case "CALCULATE_ITEMS_IN_WISHLIST":
            return {
                ...state,
                wishlistQty: state.wishlist.length
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.id !== action.payload.id)
            }
        default:
            return state
    }
}

export { initialState, wishlistReducer }
const initialState = {
    products: [],
    loading: false,
    sortBy: "",
    excludeOutOfStock: false,
    showFastDeliveryOnly: false
}

const productReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_PRODUCTS":
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case "SORT":
            return {
                ...state,
                sortBy: action.payload
            }
        case "TOGGLE_OUT_OF_STOCK":
            return {
                ...state,
                excludeOutOfStock: !state.excludeOutOfStock
            }
        case "TOGGLE_FAST_DELIVERY":
            return {
                ...state,
                showFastDeliveryOnly: !state.showFastDeliveryOnly
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                sortBy: "",
                excludeOutOfStock: false,
                showFastDeliveryOnly: false
            }
        default:
            return state;
    }
}

export { initialState, productReducer }
const initialState = {
    products: [],
    loading: false
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
        default:
            return state;
    }
}

export { initialState, productReducer }
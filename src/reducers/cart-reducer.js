const initialState = {
    cart: [],
    totalQty: 0,
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.concat({ ...action.payload, qty: 1 })
            }
        case "INCREMENT_CART_QTY":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        }
                    }
                    return item;
                })
            }
        case "DECREMENT_CART_QTY":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        if (item.qty > 1)
                            return {
                                ...item,
                                qty: item.qty - 1
                            }
                    }
                    return item;
                })
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case "GENERATE_TOTAL":
            const { totalQty, totalAmount } = state.cart.reduce((acc, item) => {
                const { price, qty } = item;
                return {
                    totalQty: acc.totalQty + qty,
                    totalAmount: acc.totalAmount + price * qty
                }
            }, { totalQty: 0, totalAmount: 0 })
            return {
                ...state,
                totalQty,
                totalAmount
            }
    }
}

export { initialState, cartReducer };
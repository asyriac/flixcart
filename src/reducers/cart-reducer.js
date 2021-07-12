import { addItem } from "../utils/utils";

const initialState = {
  cart: [],
  totalQty: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        // cart: state.cart.concat({ ...action.payload, qty: 1 })
        cart: addItem(state.cart, action.payload),
      };
    case "INCREMENT_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        }),
      };
    case "DECREMENT_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action.payload._id) {
            if (item.qty > 1)
              return {
                ...item,
                qty: item.qty - 1,
              };
          }
          return item;
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    case "GENERATE_TOTAL":
      const { totalQty, totalAmount } = state.cart.reduce(
        (acc, item) => {
          const { price } = item.product;
          const qty = item.qty;
          return {
            totalQty: acc.totalQty + qty,
            totalAmount: acc.totalAmount + price * qty,
          };
        },
        { totalQty: 0, totalAmount: 0 }
      );
      return {
        ...state,
        totalQty,
        totalAmount,
      };
    case "PLACE_ORDER":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export { initialState, cartReducer };

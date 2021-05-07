import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from '../reducers/product-reducer'

const ProductContext = createContext();


export const ProductContextProvider = ({ children }) => {

    console.log("aabbcc");
    const [state, dispatch] = useReducer(productReducer, initialState)


    const fetchProducts = async () => {
        dispatch({ type: "LOADING" });
        const { data: {data : {products}} } = await axios(`${process.env.REACT_APP_BACKEND_API}/api/v1/products`);
        dispatch({ type: "GET_PRODUCTS", payload: products })
    }

    const sortByPrice_LowToHigh = () => {
        dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
    }

    const sortByPrice_HighToLow = () => {
        dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
    }

    const toggle_OutOfStock = () => {
        dispatch({ type: "TOGGLE_OUT_OF_STOCK" })
    }

    const toggle_FastDelivery = () => {
        dispatch({ type: "TOGGLE_FAST_DELIVERY" })
    }

    const clear_Filters = () => {
        dispatch({ type: "CLEAR_FILTERS" })
    }

    useEffect(() => {
        console.log("loading...");
        fetchProducts();
    }, [])

    return (
        <ProductContext.Provider value={{ ...state, sortByPrice_LowToHigh, sortByPrice_HighToLow, toggle_OutOfStock, toggle_FastDelivery, clear_Filters }}>
            {children}
        </ProductContext.Provider>
    )

}

export const useProductContext = () => useContext(ProductContext);
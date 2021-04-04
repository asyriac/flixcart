import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from '../reducers/product-reducer'

const ProductContext = createContext();


export const ProductContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)


    const fetchProducts = async () => {
        dispatch({ type: "LOADING" });
        const { data: { products } } = await axios("/api/products");
        dispatch({ type: "GET_PRODUCTS", payload: products })
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <ProductContext.Provider value={{ ...state }}>
            {children}
        </ProductContext.Provider>
    )

}

export const useProductContext = () => useContext(ProductContext);
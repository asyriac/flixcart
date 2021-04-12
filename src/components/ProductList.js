import { useProductContext } from "../contexts/product-context";
import Product from "./Product";

export const ProductList = () => {

    const { loading, products, sortBy, excludeOutOfStock, showFastDeliveryOnly } = useProductContext();

    console.log(products[0]);

    const getSortedData = (products, sortBy) => {
        if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
            return [...products].sort((a, b) => Number(a.price) - Number(b.price))
        }

        if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
            return [...products].sort((a, b) => Number(b.price) - Number(a.price))
        }

        console.log(products)
        return products;
    }

    const getFilteredData = (products, excludeOutOfStock) => {
        return products.filter(({ inStock }) => excludeOutOfStock ? inStock : true).filter(({ fastDelivery }) => showFastDeliveryOnly ? fastDelivery : true)
    }

    const sortedData = getSortedData(products, sortBy)
    const filteredData = getFilteredData(sortedData, excludeOutOfStock, showFastDeliveryOnly)

    return (
        <div className="card-list pt-1">
            {loading && <h1>Loading...</h1>}
            {
                filteredData.map((product) => <Product key={product.id} item={product} />)
            }
        </div>
    )
}

export default ProductList;
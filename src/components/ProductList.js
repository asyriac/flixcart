import { useProductContext } from "../contexts/product-context";
import Product from "./Product";

export const ProductList = () => {

    const { loading, products } = useProductContext();

    return (
        <div className="card-list pt-1">
            {loading && <h1>Loading...</h1>}
            {
                products.map((product) => <Product key={product.id} item={product} />)
            }
        </div>
    )
}

export default ProductList;
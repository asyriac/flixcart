import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const ProductListPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <ProductList />
        </div>
    )
}

export default ProductListPage;
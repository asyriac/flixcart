import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar/Sidebar";
import useFetchCurrentUser from "../hooks/useFetchCurrentUser";
import "./page.css";

const ProductListPage = () => {
  useFetchCurrentUser();

  return (
    <div>
      <Navbar />
      <div className="flex products">
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListPage;

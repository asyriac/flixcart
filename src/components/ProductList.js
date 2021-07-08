import { useState } from "react";
import { useProductContext } from "../contexts/product-context";
import Product from "./Product";
import Pagination from "./Pagination/Pagination";

export const ProductList = () => {
  const { loading, products, sortBy, excludeOutOfStock, showFastDeliveryOnly } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const getSortedData = (products, sortBy) => {
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return [...products].sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return [...products].sort((a, b) => Number(b.price) - Number(a.price));
    }

    return products;
  };

  const getFilteredData = (products, excludeOutOfStock) => {
    return products.filter(({ inStock }) => (excludeOutOfStock ? inStock : true)).filter(({ fastDelivery }) => (showFastDeliveryOnly ? fastDelivery : true));
  };

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, excludeOutOfStock, showFastDeliveryOnly);

  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-content">
      <div className="my-grid">
        {loading && <h1>Loading...</h1>}
        {currentProducts.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
    </div>
  );
};

export default ProductList;

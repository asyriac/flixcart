import { useEffect, useState } from "react";
import { useProductContext } from "../../contexts/product-context";
import "./Sidebar.css";

const Sidebar = () => {
  const { sortBy, excludeOutOfStock, showFastDeliveryOnly, sortByPrice_LowToHigh, sortByPrice_HighToLow, toggle_OutOfStock, toggle_FastDelivery, clear_Filters } =
    useProductContext();

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1020) {
        setShowFilters(false);
      }
      if (window.innerWidth > 1020) {
        setShowFilters(true);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleShowFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  return (
    <div className="sidebar sticky-sidebar pt-1">
      <div className="sidebar-button-container">
        <button className="btn btn-secondary btn-sm mb-1 mt-sm" onClick={clear_Filters}>
          Clear filters
        </button>
        {!showFilters && (
          <button className="btn btn-secondary btn-sm mb-1 mt-sm mobile-btn" onClick={handleShowFilters}>
            Show filters
          </button>
        )}
        {showFilters && (
          <button className="btn btn-secondary btn-sm mb-1 mt-sm mobile-btn" onClick={handleShowFilters}>
            Hide filters
          </button>
        )}
      </div>
      {showFilters && (
        <div>
          <fieldset className="mb-sm">
            <legend>Sort</legend>
            <div className="flex flex-col small-text">
              <label className="pb-sm">
                <input type="radio" name="sort" onChange={sortByPrice_LowToHigh} checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"} />
                Low to high
              </label>
              <label className="pb-sm">
                <input type="radio" name="sort" onChange={sortByPrice_HighToLow} checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"} />
                High to low
              </label>
            </div>
          </fieldset>
          <fieldset className="mb-sm">
            <legend>Filter</legend>
            <div className="flex flex-col small-text">
              <label className="pb-sm">
                <input type="checkbox" onChange={toggle_OutOfStock} checked={excludeOutOfStock} />
                Exclude out of stock
              </label>
              <label className="pb-sm">
                <input type="checkbox" onChange={toggle_FastDelivery} checked={showFastDeliveryOnly} />
                Fast delivery only
              </label>
            </div>
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

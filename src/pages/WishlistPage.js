import { Link } from "react-router-dom";
import Wishlist from "../components/Wishlist";
import Navbar from "../components/Navbar";
import { useWishlistContext } from "../contexts/wishlist-context";

const WishlistPage = () => {
  const { wishlistQty } = useWishlistContext();

  if (wishlistQty > 0)
    return (
      <>
        <Navbar /> <Wishlist />
      </>
    );
  else
    return (
      <>
        <Navbar />
        <div className="container pt-1 text-center ">
          <h2 className="">
            Wishlist is empty.{" "}
            <Link to="/" className="primary-text">
              Start window-shopping.
            </Link>
          </h2>
        </div>
      </>
    );
};

export default WishlistPage;

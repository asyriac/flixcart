import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";
import { useCartContext } from "../contexts/cart-context";
import { useWishlistContext } from "../contexts/wishlist-context";

const Navbar = () => {
  const { totalQty, fetchCart } = useCartContext();
  const { wishlistQty, fetchWishlist } = useWishlistContext();
  const { isLoggedIn, logoutUser } = useAuthContext();

  console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn === true) {
      fetchCart();
      fetchWishlist();
    }
  }, [isLoggedIn]);

  return (
    <nav className="nav bg-white sticky">
      <div className="nav-brand">
        <h2>
          <Link to="/">Flixcart</Link>
        </h2>
      </div>

      {isLoggedIn ? (
        <ul className="nav-link">
          <li className="nav-link-item">
            <Link to="/wishlist">
              <div className="badge-container">
                <i className="fas fa-heart icon-sm"></i>
                <span className="badge-notification">{wishlistQty}</span>
              </div>
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/cart">
              <div className="badge-container">
                <i className="fas fa-shopping-cart icon-sm"></i>
                <span className="badge-notification">{totalQty}</span>
              </div>
            </Link>
          </li>

          <li className="nav-link-item" style={{ cursor: "pointer" }} onClick={() => logoutUser()}>
            Logout
          </li>
        </ul>
      ) : (
        <ul className="nav-link">
          <li className="nav-link-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

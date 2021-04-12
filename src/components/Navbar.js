import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cart-context";
import { useWishlistContext } from "../contexts/wishlist-context";

const Navbar = () => {

    const { totalQty } = useCartContext();
    const { wishlistQty } = useWishlistContext();

    return (
        <nav className="nav bg-white sticky">
            <div className="nav-brand">
                <h2><Link to="/">Flixcart</Link></h2>
            </div>
            <ul className="nav-link">
                <li className="nav-link-item"><Link to="/wishlist">
                    <div className="badge-container">
                        <i className="fas fa-heart icon-sm"></i>
                        <span className="badge-notification">{wishlistQty}</span>
                    </div>
                </Link></li>
                <li className="nav-link-item"><Link to="/cart">
                    <div className="badge-container">
                        <i className="fas fa-shopping-cart icon-sm"></i>
                        <span className="badge-notification">{totalQty}</span>
                    </div>
                </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
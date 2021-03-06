import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../contexts/auth-context";
import { useCartContext } from "../contexts/cart-context";
import { useWishlistContext } from "../contexts/wishlist-context";

const Product = ({ item: { id, name, image, price, inStock, fastDelivery }, item }) => {
  const { cart, addItemToCart } = useCartContext();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistContext();
  const { isLoggedIn } = useAuthContext();
  const history = useHistory();

  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const presentInWishlist = wishlist.find((wishlistItem) => wishlistItem.product._id === id);
  useEffect(() => {
    if (presentInWishlist) {
      setIsAddedToWishlist(true);
    } else setIsAddedToWishlist(false);
  }, [wishlist]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    if (!isLoggedIn) history.push("/login");
    else addItemToCart(item);
  };

  const handleGoToCart = (e) => {
    e.stopPropagation();
    history.push("/cart");
  };

  const isAddedToCart = () => {
    if (cart.find((cartItem) => cartItem.product._id === id))
      return (
        <button className="btn btn-primary" onClick={handleGoToCart}>
          Go to cart
        </button>
      );
    return (
      <button className="btn btn-primary" onClick={(e) => handleAddToCart(e, item)} disabled={!inStock}>
        Add to cart
      </button>
    );
  };

  const handleAddToWishlist = (e, item) => {
    e.stopPropagation();
    if (!isLoggedIn) history.push("/login");
    else addToWishlist(item);
  };

  const handleRemoveFromWishlist = (e, item) => {
    e.stopPropagation();
    removeFromWishlist(item);
  };

  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={image} alt={name} />
        {!isAddedToWishlist && (
          <button className="btn btn-primary btn-icon btn-icon-sm card-img-overlay" onClick={(e) => handleAddToWishlist(e, item)}>
            <i className="far fa-heart"></i>
          </button>
        )}
        {isAddedToWishlist && (
          <button className="btn btn-primary btn-icon btn-icon-sm card-img-overlay" onClick={(e) => handleRemoveFromWishlist(e, presentInWishlist)}>
            <i className="fas fa-heart"></i>
          </button>
        )}
      </div>
      <div className="card-content">
        <div className="card-body">
          <h4 className="mb-md ">{name}</h4>
          <h5 className="">Rs. {price}</h5>
          {inStock ? <span className="">In stock</span> : <span className=" ">Out of stock</span>}
          {fastDelivery && <span className="mb-md ">Fast delivery</span>}
        </div>
        {isAddedToCart()}
      </div>
    </div>
  );
};

export default Product;

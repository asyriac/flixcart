import { useCartContext } from "../contexts/cart-context";
import { useWishlistContext } from "../contexts/wishlist-context";

const WishlistItem = ({
  item: {
    _id,
    product: { name, image, price, inStock },
  },
  item,
}) => {
  const { moveToCart, removeFromWishlist } = useWishlistContext();
  const { addItemToCart } = useCartContext();

  const handleMoveToCart = (item) => {
    moveToCart(item);
    addItemToCart(item.product);
  };

  const handleRemoveFromWishlist = (item) => {
    removeFromWishlist(item);
  };


  return (
    <div className="card-h bg-white">
      <img className="card-img-h" src={image} alt={name} />
      <div className="card-content-h">
        <div>
          <h3 className="mb-md">{name}</h3>
          <h5 className="mb-md">Rs {price}</h5>
        </div>
        <div className="card-content-h-buttons">
          <button className="btn btn-secondary" disabled={!inStock} onClick={() => handleMoveToCart(item)}>
            Move to cart
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromWishlist(item)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;

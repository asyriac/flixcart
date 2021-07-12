import { useWishlistContext } from "../contexts/wishlist-context";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const { wishlist } = useWishlistContext();
  return (
    <div className="container pt-1 card-list-h">
      {wishlist.map((item) => (
        <WishlistItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Wishlist;

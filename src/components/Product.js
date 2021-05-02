import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useCartContext } from "../contexts/cart-context"
import { useWishlistContext } from "../contexts/wishlist-context";

const Product = ({ item: { id, name, image, price, inStock, fastDelivery }, item }) => {

    const { cart, addItemToCart } = useCartContext();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlistContext();
    const history = useHistory();

    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

    useEffect(() => {
        if (wishlist.find((wishlistItem) => wishlistItem.product._id === id)) {
            setIsAddedToWishlist(true);
        }
        else
            setIsAddedToWishlist(false);
    }, [wishlist])

    const handleAddToCart = (item) => {
        addItemToCart(item);
    }

    const isAddedToCart = () => {
        if (cart.find((cartItem) => cartItem.product._id === id))
            return <button className="btn btn-primary" onClick={() => history.push('/cart')}>Go to cart</button>
        return <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to cart</button>
    }

    const handleAddToWishlist = (item) => {
        addToWishlist(item)
    }

    const handleRemoveFromWishlist = (item) => {
        removeFromWishlist(item)
    }

    return (
        <div className="card card-shadow">
            <div className="card-img-container">
                <img className="card-img" src={image} alt={name} />
                {!isAddedToWishlist && <button className="btn btn-primary btn-icon btn-icon-sm card-img-overlay" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>}
                {isAddedToWishlist && <button className="btn btn-primary btn-icon btn-icon-sm card-img-overlay" onClick={() => handleRemoveFromWishlist(item)}><i className="fas fa-heart"></i></button>}
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
    )
}

export default Product;
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useCartContext } from "../contexts/cart-context";
import { useProductContext } from "../contexts/product-context";
import { useWishlistContext } from "../contexts/wishlist-context";

const ProductDetails = () => {

    const {productId} = useParams();
    const { loading,products } = useProductContext();
    const { cart, addItemToCart } = useCartContext();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlistContext();
    const productDetails = products.find((item)=> item.id === productId);
    const history = useHistory();

    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
    const presentInWishlist = wishlist.find((wishlistItem) => wishlistItem.product._id === productId);
    useEffect(() => {
        if (presentInWishlist) {
            setIsAddedToWishlist(true);
        }
        else
            setIsAddedToWishlist(false);
    }, [wishlist])

    const handleAddToCart = (item) => {
        addItemToCart(item);
    }

    const handleGoToCart = (e) => {
        e.stopPropagation();
        history.push('/cart');
    }

    const isAddedToCart = () => {
        if (cart.find((cartItem) => cartItem.product._id === productId))
            return <button className="btn btn-primary" onClick={handleGoToCart}>Go to cart</button>
        return <button className="btn btn-primary" onClick={() => handleAddToCart(productDetails)} disabled={!productDetails.inStock}>Add to cart</button>
    }

    const handleAddToWishlist = (item) => {
        addToWishlist(item)
    }

    const handleRemoveFromWishlist = (item) => {
        removeFromWishlist(item)
    }
    

    return(
        <>
        {
        productDetails &&
        <div className="flex flex-center pt-1">
            <div className="card " >
                <div className="card-img-container">
                    <img className="card-img" src={productDetails.image} alt={productDetails.name} />
                    {!isAddedToWishlist && <button className="btn btn-primary btn-icon btn-icon-sm card-img-overlay" onClick={() => handleAddToWishlist(productDetails)}><i className="far fa-heart"></i></button>}
                    {isAddedToWishlist && <button className="btn btn-primary btn-icon btn-icon-sm card-img-overlay" onClick={() => handleRemoveFromWishlist(presentInWishlist)}><i className="fas fa-heart"></i></button>}
                </div>
                <div className="card-content">
                    <div className="card-body">
                        <h4 className="mb-md ">{productDetails.name}</h4>
                        <h5 className="">Rs. {productDetails.price}</h5>
                        {productDetails.inStock ? <span className="">In stock</span> : <span className=" ">Out of stock</span>}
                        {productDetails.fastDelivery && <span className="mb-md ">Fast delivery</span>}
                    </div>
                    {isAddedToCart()}
                </div>
            </div>
        </div>
       }
       </>
    )
}

export default ProductDetails;
import { useCartContext } from "../contexts/cart-context";

const CartItem = ({ item: { id, name, image, price, qty }, item }) => {

    const { incrementCartQty, decrementCartQty, removeFromCart } = useCartContext();

    const handleIncrementCartQty = (item) => {
        incrementCartQty(item)
    }

    const handleDecrementCartQty = (item) => {
        decrementCartQty(item)
    }

    const handleRemoveFromCart = (item) => {
        removeFromCart(item)
    }

    return (
        <div className="card-h">
            <img className="card-img-h" src={image} alt="" />
            <div className="card-content-h">
                <div>
                    <h3 className="mb-md">{name}</h3>
                    <h5 className="mb-md">Rs {price}</h5>
                </div>
                <div className="card-content-h-buttons">
                    <div className="flex flex-center">
                        <button className="btn btn-secondary btn-sm" onClick={() => handleIncrementCartQty(item)}>+</button>
                        <h4 className="px-1">{qty}</h4>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleDecrementCartQty(item)}>-</button>
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item)}><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
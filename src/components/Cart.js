import { useCartContext } from "../contexts/cart-context";
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, totalAmount } = useCartContext();

    return (
        <div className=" pt-1 pb-1 container flex">
            <div className="cart">
                <h2 className="pb-sm">Cart</h2>
                <div className="card-list-h" >
                    {
                        cart.map((item) => {
                            return <CartItem key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
            <div className="price-details flex flex-col flex-space-between">
                <h2 className="text-center">Price details</h2>
                <div className="cart-total flex flex-space-between">
                    <h3>Total:</h3>
                    <h3>Rs. {totalAmount}</h3>
                </div>
                <button className="btn btn-primary">Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Cart;
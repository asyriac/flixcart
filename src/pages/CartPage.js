import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useCartContext } from "../contexts/cart-context";

const CartPage = () => {

    const { totalQty } = useCartContext();

    if (totalQty > 0)
        return <Cart />
    else
        return (
            <div className="container pt-1 text-center ">
                <h2 className="">Cart is empty. <Link to="/" className="primary-text">Start shopping.</Link></h2>
            </div>
        )
}

export default CartPage;
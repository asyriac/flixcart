import { useHistory } from "react-router-dom";
import { useCartContext } from "../../contexts/cart-context";
import CartItem from "../Cart/CartItem";
import "./Cart.css";
import { displayRazorpay } from "./Payment";

const Cart = () => {
  const { cart, totalAmount, placeOrder } = useCartContext();
  const history = useHistory();

  const handlePlaceOrder = () => {
    setTimeout(() => {
      displayRazorpay(totalAmount, history);
    }, 1000);
  };

  return (
    <div className=" pt-1 pb-1 container flex products">
      <div className="cart">
        <h2 className="pb-sm">Cart</h2>
        <div className="card-list-h">
          {cart.map((item) => {
            return <CartItem key={item._id} item={item} />;
          })}
        </div>
      </div>
      <div className="price-details flex flex-col flex-space-between">
        <h2 className="text-center">Price details</h2>
        <div className="cart-total flex flex-space-between">
          <h3>Total:</h3>
          <h3>Rs. {totalAmount}</h3>
        </div>
        <button className="btn btn-primary" onClick={handlePlaceOrder}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

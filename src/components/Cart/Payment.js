import { toast } from "react-toastify";
import axios from "axios";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function displayRazorpay(totalPrice, history) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    return toast.error("Razorpay Payment Gateway failed to load. Are you online?", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/order`, {
    amount: totalPrice,
  });

  if (!response) {
    return toast.error("Server error. Are you online?", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const { amount, id: order_id, currency } = response.data.order;

  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID,
    amount: amount.toString(),
    currency: currency,
    name: "Flixcart",
    description: "Flixcart Checkout",
    image: "https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg",
    order_id: order_id,
    handler: function () {
      toast.success("Order placed", {
        position: "top-right",
        autoClose: 1800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/");
    },
    notes: {
      address: "Flixcart Limited",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

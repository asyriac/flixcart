import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Wishlist from "./components/Wishlist";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact component={ProductListPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/wishlist" exact component={Wishlist} />
    </div>
  );
}

export default App;

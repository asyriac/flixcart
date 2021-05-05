import { Route } from "react-router";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact component={ProductListPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/wishlist" exact component={WishlistPage} />
    </div>
  );
}

export default App;

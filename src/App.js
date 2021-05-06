import { Route, Switch } from "react-router";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductListPage} />
        <Route path="/login" exact component={LoginPage} />         
        <PrivateRoute path="/wishlist" exact component={WishlistPage} />      
        <PrivateRoute path="/cart" exact={true} component={CartPage} />      
      </Switch>
    </div>
  );
}

export default App;

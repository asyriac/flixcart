import { Route, Switch } from "react-router";
import Login from "./components/Auth/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import WishlistPage from "./pages/WishlistPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Register from "./components/Auth/Register/Register";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ProductListPage} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/wishlist" exact component={WishlistPage} />
        <PrivateRoute path="/cart" exact={true} component={CartPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;

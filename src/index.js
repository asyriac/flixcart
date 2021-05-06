import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductContextProvider } from './contexts/product-context';
import { CartContextProdiver } from './contexts/cart-context';
import { BrowserRouter } from 'react-router-dom';
import { WishlistProvider } from './contexts/wishlist-context';
import { AuthProvider } from './contexts/auth-context';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <ProductContextProvider>
          <CartContextProdiver>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartContextProdiver>
        </ProductContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

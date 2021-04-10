import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductContextProvider } from './contexts/product-context';
import setupMockServer from './api/mock-server';
import { CartContextProdiver } from './contexts/cart-context';
import { BrowserRouter } from 'react-router-dom';

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProdiver>
          <App />
        </CartContextProdiver>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

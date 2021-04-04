import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductContextProvider } from './contexts/product-context';
import setupMockServer from './api/mock-server';

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

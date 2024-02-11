import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/products_context.jsx";
import { FilterProvider } from "./context/filter_context.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context.jsx";
// dev-3yw28n63zf7pujvw.us.auth0.com
// wQmJ9fuvGs2AUCLXeYVoB6eXtt2cUSWg

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-3yw28n63zf7pujvw.us.auth0.com"
    clientId="wQmJ9fuvGs2AUCLXeYVoB6eXtt2cUSWg"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);

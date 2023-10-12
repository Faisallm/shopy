import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // our all_products data can now be accessed by all...
  // components
  
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

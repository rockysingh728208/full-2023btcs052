import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
// import { CartProvider } from "./context/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <BrowserRouter>
        <App />
        <ToastContainer position="top-right" autoClose={2000} />
      </BrowserRouter>
  
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { CartContextProvider } from "./context/cartContext";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIiVgKDBaLm7dZ_OLldIq25VupLXAcse4",
  authDomain: "coderhouse-villani.firebaseapp.com",
  projectId: "coderhouse-villani",
  storageBucket: "coderhouse-villani.appspot.com",
  messagingSenderId: "388808815072",
  appId: "1:388808815072:web:840c218b161c8855943b85"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();

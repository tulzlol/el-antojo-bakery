import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import CategoryView from "../views/category"
import Item from "../views/item";
import Cart from "../views/cart";
import CheckoutView from "../views/checkout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/category/:category",
        element: <CategoryView />,
    },
    {
        path: "/item/:id",
        element: <Item />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    { path: "/checkout",
    element: <CheckoutView/> }
]);
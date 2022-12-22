import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { Nav } from "react-bootstrap";
import Icon from "./Icon";


export const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;

    return (
        <Nav.Link as={Link} to="/cart">
            <span className="p-2">
            {Icon("cart")}
            </span>
                {count > 0 && (
                    <span className="text-primary">
                        {count}
                    </span>
                )}
        </Nav.Link>)
}

export default CartWidget;
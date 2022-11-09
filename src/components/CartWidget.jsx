import React from "react";
import { NavDropdown } from "react-bootstrap";
import Icon from "./Icon";


function CartWidget() {
    return (
        <NavDropdown title={Icon("cart")} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Empty</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Empty</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Empty</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Empty</NavDropdown.Item>
        </NavDropdown>)
}

export default CartWidget;
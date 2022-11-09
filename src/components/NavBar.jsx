import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import Icon from './Icon';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
                <Navbar.Brand href="#home">EL ANTOJO BAKERY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Productos " id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Muffins</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Panes saborizados</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Galletas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Alfajores</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#home">Quienes somos</Nav.Link>
                        <Nav.Link href="#home">Contacto</Nav.Link>

                <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
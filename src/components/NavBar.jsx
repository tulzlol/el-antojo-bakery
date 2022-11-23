import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
                <Navbar.Brand >EL ANTOJO BAKERY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                        <NavDropdown title="Productos " id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/muffins">Muffins</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/panes-saborizados">Panes saborizados</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/galletas">Galletas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/alfajores">Alfajores</NavDropdown.Item>
                        </NavDropdown>
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
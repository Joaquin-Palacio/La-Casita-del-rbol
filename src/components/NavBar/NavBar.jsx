import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
/* import { Authentication } from '../Authentication/Authentication'; */
import './NavBar.css';

export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          La Casita del Árbol
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sobrenosotros">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>        
          </Nav>
          <CartWidget />
          {/* <Authentication /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

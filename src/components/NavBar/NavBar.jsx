import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          River-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/categoria/camisetas">
              Camisetas
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/camperas">
              Camperas
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/buzos">
              Buzos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/pantalones">
              Pantalones
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

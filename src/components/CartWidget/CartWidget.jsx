import { Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <Nav.Link>
      <FaShoppingCart className="cartIcon" />
      <strong>2</strong>
    </Nav.Link>
  );
};

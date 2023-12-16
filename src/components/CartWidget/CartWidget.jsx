import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart className="cartIcon" />
      <strong>2</strong>
    </div>
  );
};

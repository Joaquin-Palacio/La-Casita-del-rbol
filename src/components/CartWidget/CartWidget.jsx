import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <FaShoppingCart className="cartIcon" />
        {cantidadTotal > 0 && <strong> {cantidadTotal} </strong>}
      </Link>
    </div>
  );
};

import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap'; // Importa el componente Badge de React-Bootstrap
import './CartWidget.css';

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart" className="cart-link">
        <FaShoppingCart className="cartIcon" />
        {cantidadTotal > 0 && <Badge variant="danger">{cantidadTotal}</Badge>}
      </Link>
    </div>
  );
};

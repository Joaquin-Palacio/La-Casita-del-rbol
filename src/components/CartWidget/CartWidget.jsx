import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import './CartWidget.css';

export const CartWidget = () => {
  // Utiliza el CartContext para acceder a la cantidad total de productos en el carrito.
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className='m-2'>
      <Link to="/cart" className="cart-link">
        <FaShoppingCart className="cartIcon" />
        {/* Muestra un Badge con la cantidad total solo si la cantidad es mayor que cero. */}
        {cantidadTotal > 0 && <Badge variant="danger">{cantidadTotal}</Badge>}
      </Link>
    </div>
  );
};

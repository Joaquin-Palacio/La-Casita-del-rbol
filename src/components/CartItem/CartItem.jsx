import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

export const CartItem = ({ item, cantidad }) => {
  // Obtenemos la función 'deleteItem' del context
  const { deleteItem } = useContext(CartContext);

  return (
    // Card de React-Bootstrap que muestra información del producto
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>Cantidad: {cantidad}</Card.Text>
        <Card.Text>Precio: ${item.precio}</Card.Text>
        {/* Botón para eliminar el producto del carrito */}
        <Button variant="danger" onClick={() => deleteItem(item.id)}>
          Eliminar Producto
        </Button>
      </Card.Body>
    </Card>
  );
};

// Propiedades requeridas para el componente CartItem
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  cantidad: PropTypes.number.isRequired,
};

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  // Obtenemos datos del carrito del contexto
  const { carrito, cartEmpty, total, cantidadTotal } = useContext(CartContext);

  // Verificamos si no hay productos en el carrito
  if (cantidadTotal === 0) {
    return (
      // Mostramos un mensaje si no hay productos
      <Card>
        <Card.Body>
          <Card.Title>Todavía no hay productos en el carrito</Card.Title>
          <Link to="/" className="btn btn-primary">
            Ver Productos
          </Link>
        </Card.Body>
      </Card>
    );
  }

  // Si hay productos en el carrito, mostramos la lista y detalles del carrito
  return (
    <Card>
      <Card.Body>
        {/* Mapeamos los productos en el carrito y renderizamos el componente CartItem */}
        {carrito.map((producto) => (
          <CartItem key={producto.item.id} {...producto} />
        ))}
        {/* Mostramos el total y la cantidad total de productos en el carrito */}
        <Card.Text>Total: ${total}</Card.Text>
        <Card.Text>Cantidad Total: {cantidadTotal}</Card.Text>
        {/* Botón para vaciar el carrito */}
        <Button variant="danger" onClick={() => cartEmpty()}>
          Eliminar Productos del Carrito
        </Button>
        {/* Enlace para ir a la página de checkout */}
        <Link to="/checkout" className="btn btn-success">
          Finalizar Compra
        </Link>
      </Card.Body>
    </Card>
  );
};

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
      <Card className="container text-center mt-5">
        <Card.Body>
          <Card.Title>Todavía no hay productos en el carrito</Card.Title>
          <Link to="/" className="btn btn-primary mt-4">
            Ver Productos
          </Link>
        </Card.Body>
      </Card>
    );
  }

  // Si hay productos en el carrito, mostramos la lista y detalles del carrito
  return (
    <Card className="container text-center mt-5">
      <Card.Body>
        <div className="row">
          {/* Mapeamos los productos en el carrito y renderizamos el componente CartItem */}
          {carrito.map((producto) => (
            <div key={producto.item.id} className="col m-1">
              <CartItem {...producto} />
            </div>
          ))}
        </div>
        {/* Mostramos el total y la cantidad total de productos en el carrito */}
        <Card.Text className="mt-5">Total: ${total}</Card.Text>
        <Card.Text>Cantidad Total: {cantidadTotal}</Card.Text>
        {/* Botón para vaciar el carrito */}
        <Button variant="danger" onClick={() => cartEmpty()}>
          Eliminar Productos del Carrito
        </Button>
        {/* Enlace para ir a la página de checkout */}
        <Link to="/checkout" className="m-2 btn btn-success">
          Finalizar Compra
        </Link>
      </Card.Body>
    </Card>
  );
};

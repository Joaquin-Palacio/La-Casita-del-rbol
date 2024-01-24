import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CartItem } from '../CartItem/CartItem';
import Swal from 'sweetalert2'; // Importa SweetAlert2

export const Cart = () => {
  // Obtenemos datos del cart context
  const { carrito, cartEmpty, total, cantidadTotal } = useContext(CartContext);

  // Función para manejar el clic en el botón de vaciar carrito
  const handleEmptyCart = () => {
    // Muestra SweetAlert de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará todos los productos del carrito. ¿Quieres continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Vacía el carrito si se confirma
        cartEmpty();

        // Muestra SweetAlert de éxito al vaciar el carrito
        Swal.fire({
          icon: 'success',
          title: 'Carrito vacío',
        });
      }
    });
  };

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
    <Container className='text-center'>
      <Card>
        <Card.Body>
          <Row>
            {/* Mapeamos los productos en el carrito y renderizamos el componente CartItem */}
            {carrito.map((producto) => (
              <Col key={producto.item.id} sm={6} md={4} lg={3}>
                <CartItem {...producto} />
              </Col>
            ))}
          </Row>
          {/* Mostramos el total y la cantidad total de productos en el carrito */}
          <Card.Text className="mt-5">Total: ${total}</Card.Text>
          <Card.Text>Productos: ({cantidadTotal})</Card.Text>
          {/* Botón para vaciar el carrito con SweetAlert */}
          <Button variant="danger" onClick={handleEmptyCart}>
            Eliminar Productos del Carrito
          </Button>
          {/* Enlace para ir al catálogo */}
          <Link to="/" className="m-2 btn btn-primary">
            Agregar más productos
          </Link>
          {/* Enlace para ir al checkout */}
          <Link to="/checkout" className="m-2 btn btn-primary">
            Finalizar Compra
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

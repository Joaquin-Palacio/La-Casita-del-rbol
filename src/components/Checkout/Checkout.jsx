// Importación de React y otras dependencias
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { doc, updateDoc, getDoc, addDoc, collection } from 'firebase/firestore';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './Checkout.css';

// Componente funcional Checkout
export const Checkout = () => {
  // Utilizando el contexto del carrito
  const { carrito, cartEmpty, total } = useContext(CartContext);

  // Estados para manejar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmado, setEmailConfirmado] = useState('');
  const [ordenId, setOrdenId] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if (!nombre || !apellido || !telefono || !email || !emailConfirmado) {
      // Muestra SweetAlert de error para campos vacíos
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Por favor, completa todos los campos del formulario.',
      });
      return;
    }

    if (email !== emailConfirmado) {
      // Muestra SweetAlert de error para emails que no coinciden
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Los emails no coinciden. Por favor, verifica tu dirección de correo electrónico.',
      });
      return;
    }

    // Construcción del objeto orden con los datos del formulario y productos del carrito
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    // Actualización del stock en la base de datos para cada producto del carrito
    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, 'productos', productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        // Agregar la orden a la colección 'ordenes' en la base de datos
        addDoc(collection(db, 'ordenes'), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            cartEmpty();

            // Muestra SweetAlert de éxito
            Swal.fire({
              icon: 'success',
              title: '¡Gracias por tu compra!',
              text: `Tu número de orden es: ${docRef.id}`,
            });
          })
          .catch((error) => {
            console.log('Error al crear la orden', error);

            // Muestra SweetAlert de error al crear la orden
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo crear la orden. Por favor, inténtalo de nuevo.',
            });
          });
      })
      .catch((error) => {
        console.log('No se pudo actualizar el stock', error);

        // Muestra SweetAlert de error al actualizar el stock
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo actualizar el stock. Por favor, inténtalo de nuevo.',
        });
      });
  };

  // Función para limpiar el carrito con confirmación
  const handleClearCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción vaciará tu carrito. ¿Quieres continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        cartEmpty();

        // Muestra un mensaje al limpiar el carrito
        Swal.fire({
          icon: 'success',
          title: 'Carrito limpio',
          text: 'Los productos fueron borrados de tu carrito.',
        });
      }
    });
  };

  // Renderizado del componente Checkout
  return (
    <div className="container">
      <h2>Checkout</h2>

      {/* Mostrar los productos en el carrito */}
      <div className="d-flex flex-wrap">
        {carrito.map((producto) => (
          <div
            key={producto.item.id}
            className="card cardCheck rounded mx-2 mb-3"
          >
            <img
              className="card-img-top img-checkout rounded"
              src={producto.item.img}
              alt={producto.item.nombre}
            />
            <div className="card-body">
              <p className="card-text">
                {producto.item.nombre} x {producto.cantidad}
              </p>
              <p className="card-text">Precio: ${producto.item.precio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario de datos del usuario */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmailConfirmado">
          <Form.Label>Email Confirmacion</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmailConfirmado(e.target.value)}
          />
        </Form.Group>

        {/* Botones para finalizar orden y vaciar carrito */}
        <Button className="m-2" variant="primary" type="submit">
          Finalizar Orden
        </Button>

        <Button className="m-2" variant="danger" onClick={handleClearCart}>
          Vaciar Carrito
        </Button>
      </Form>
    </div>
  );
};

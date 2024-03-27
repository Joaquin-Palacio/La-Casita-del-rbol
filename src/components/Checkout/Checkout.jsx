import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { doc, updateDoc, getDoc, addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import './Checkout.css';

export const Checkout = () => {
  const { carrito, cartEmpty, total } = useContext(CartContext);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmado, setEmailConfirmado] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (carrito.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No hay productos en tu carrito. Agrega productos antes de realizar la orden.',
      });
      return;
    }

    if (!nombre || !apellido || !telefono || !email || !emailConfirmado) {
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Por favor, completa todos los campos del formulario.',
      });
      return;
    }

    if (email !== emailConfirmado) {
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Los emails no coinciden. Por favor, verifica tu dirección de correo electrónico.',
      });
      return;
    }

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
        addDoc(collection(db, 'ordenes'), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            cartEmpty();

            Swal.fire({
              icon: 'success',
              title: '¡Gracias por tu compra!',
              text: `Tu número de orden es: ${docRef.id}`,
            });
          })
          .catch((error) => {
            console.log('Error al crear la orden', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo crear la orden. Por favor, inténtalo de nuevo.',
            });
          });
      })
      .catch((error) => {
        console.log('No se pudo actualizar el stock', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo actualizar el stock. Por favor, inténtalo de nuevo.',
        });
      });
  };

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

        Swal.fire({
          icon: 'success',
          title: 'Carrito Vacío',
          text: 'Los productos fueron borrados de tu carrito.',
        });
      }
    });
  };

  return (
    <div className="container checkout-container">
      <h2 className="text-center mb-4">Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Productos en el Carrito</h5>
              {carrito.map((producto) => (
                <div key={producto.item.id} className="row mb-2">
                  <div className="col-4">
                    <img
                      src={producto.item.img}
                      alt={producto.item.nombre}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-8">
                    <p className="mb-1">{producto.item.nombre}</p>
                    <p className="mb-0">Cantidad: {producto.cantidad}</p>
                    <p className="mb-0">Precio: ${producto.item.precio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Información del Cliente</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailConfirmado" className="form-label">
                    Confirmar Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailConfirmado"
                    value={emailConfirmado}
                    onChange={(e) => setEmailConfirmado(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary">
                    Finalizar Orden
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Resumen</strong>
              </h5>
              <p className="card-text mb-0">
                Productos: <strong>{carrito.length}</strong>
              </p>
              <p className="card-text">
                <strong>Total: ${total}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 m-2">
        <Button variant="danger" onClick={handleClearCart}>
          Vaciar Carrito
        </Button>
      </div>
    </div>
  );
};

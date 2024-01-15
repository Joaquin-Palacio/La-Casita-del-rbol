import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { doc, updateDoc, getDoc, addDoc, collection } from 'firebase/firestore';

export const Checkout = () => {
  const { carrito, cartEmpty, total } = useContext(CartContext);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmado, setEmailConfirmado] = useState('');
  const [ordenId, setOrdenId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailConfirmado) {
      setError('Por Favor, completa correctamente cada campo');
      return;
    }

    if (email !== emailConfirmado) {
      setError('El email no coincide');
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
          })
          .catch((error) => console.log('Error al crear la orden', error));
      })
      .catch((error) => {
        console.log('No se pudo actualizar el stock', error);
        setError('No se pudo actualizar el stock');
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {carrito.map((producto) => {
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio: ${producto.item.precio}</p>
            <hr />
          </div>;
        })}

        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email Confirmacion</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmado(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}> {error} </p>}

        <button type="submit">Finalizar Orden</button>

        {ordenId &&
          ((<strong>¡Gracias por su compra!</strong>),
          (<p>Tu número de orden es: {ordenId} </p>))}
      </form>
    </div>
  );
};

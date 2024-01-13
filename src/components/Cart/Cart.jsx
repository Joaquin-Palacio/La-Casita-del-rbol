import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  const { carrito, cartEmpty, total, cantidadTotal } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>Todavía no hay productos en el carrito</h2>
        <Link to="/"> Ver Productos </Link>
      </>
    );
  }
  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <h3>Total: ${total} </h3>
      <h4>Cantidad Total: {cantidadTotal} </h4>
      <button onClick={() => cartEmpty()}>
        Eliminar Productos del Carrito
      </button>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

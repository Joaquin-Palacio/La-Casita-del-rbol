import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import PropTypes from 'prop-types';

export const CartItem = ({ item, cantidad }) => {
  const { deleteItem } = useContext(CartContext);

  return (
    <div>
      <h4>{item.nombre}</h4>
      <img src={item.img} alt="imagen" />
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {item.precio}</p>
      <button onClick={() => deleteItem(item.id)}>Eliminar Producto</button>
      <hr />
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  cantidad: PropTypes.number.isRequired,
};

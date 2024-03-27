import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import './CartItem.css';

export const CartItem = ({ item, cantidad }) => {
  // Obtenemos la función 'deleteItem' del context
  const { deleteItem } = useContext(CartContext);

  // Función para eliminar el producto con SweetAlert
  const handleDeleteItem = () => {
    swal
      .fire({
        title: `¿Estás seguro de que deseas eliminar ${item.nombre} del carrito?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteItem(item.id);
        }
      });
  };

  return (
    // Card simple para mostrar información del producto
    <div className="card cartItem m-1">
      <img
        className="card-img-top imgCartItem img-fluid"
        src={item.img}
        alt={item.nombre}
      />
      <div className="card-body">
        <h5 className="card-title cartItem-title">{item.nombre}</h5>
        <p className="card-text">Cantidad: {cantidad}</p>
        <p className="card-text">Precio: ${item.precio}</p>
        {/* Botón para eliminar el producto del carrito */}
        <button className="btn btn-danger" onClick={handleDeleteItem}>
          Eliminar Producto
        </button>
      </div>
    </div>
  );
};

// Propiedades requeridas para el componente CartItem
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  cantidad: PropTypes.number.isRequired,
};

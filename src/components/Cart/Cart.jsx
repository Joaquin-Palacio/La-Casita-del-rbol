import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Cart = () => {
  const { carrito, cartEmpty, total, cantidadTotal } = useContext(CartContext);

  const handleEmptyCart = () => {
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
        cartEmpty();
        Swal.fire({
          icon: 'success',
          title: 'Carrito vacío',
        });
      }
    });
  };

  if (cantidadTotal === 0) {
    return (
      <div className="container text-center mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Todavía no hay productos en el carrito
            </h5>
            <Link to="/" className="btn btn-primary mt-4">
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-center">
      <div className="card">
        <div className="card-body">
          <div className="row">
            {carrito.map((producto) => (
              <div
                key={producto.item.id}
                className="col-sm-6 col-md-4 col-lg-3"
              >
                <CartItem {...producto} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <p className="m-4">
              Total: <strong>${total}</strong>{' '}
            </p>
            <p className="m-4">
              Productos: <strong>({cantidadTotal})</strong>{' '}
            </p>
          </div>
          <button className="btn btn-danger" onClick={handleEmptyCart}>
            Eliminar Productos del Carrito
          </button>
          <Link to="/" className="m-2 btn btn-primary">
            Agregar más productos
          </Link>
          <Link to="/checkout" className="m-2 btn btn-primary">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

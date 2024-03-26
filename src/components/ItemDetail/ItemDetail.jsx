import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Importación del componente ItemCount
import { ItemCount } from '../ItemCount/ItemCount';

// Importación del contexto CartContext
import { CartContext } from '../../context/CartContext';

// Importación del archivo de estilos para el componente ItemDetail
import './ItemDetail.css';

export const ItemDetail = ({ id, nombre, img, precio, stock, descripcion }) => {
  const [addCantidad, setAddCantidad] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleCantidad = (cantidad) => {
    setAddCantidad(cantidad);

    const item = { id, nombre, img, precio };
    addItem(item, cantidad);
  };

  return (
    <div className="container text-center">
      <div className="card cardDetail">
        <div className="card-body">
          <h5 className="card-title mb-5">{nombre}</h5>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src={img} alt={nombre} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p className="card-text mt-5 mb-5 descProduct">{descripcion}</p>
              <div className="mb-5">
                <p className="card-text mb-3">
                  <strong>Unidades Disponibles:</strong> {stock}
                </p>
                <p className="card-text">
                  <strong>Precio:</strong> ${precio}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {addCantidad > 0 ? (
            <div className="mt-3">
              <Link to="/cart" className="btn btn-primary m-2">
                Terminar compra
              </Link>
              <Link to="/" className="btn btn-success m-2">
                Ver más productos
              </Link>
            </div>
          ) : (
            <div className="mt-3">
              <ItemCount
                valorInicial={1}
                stock={stock}
                addCarrito={handleCantidad}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
};

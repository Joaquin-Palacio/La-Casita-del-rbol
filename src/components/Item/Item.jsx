import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="card text-center m-1 cardItem">
      <img className="img-fluid" src={img} alt="imagen producto" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio}</p>
        {/* Botón que actúa como Link a la página de detalles del producto */}
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

// Definición de los tipos de propiedades esperadas por el componente Item
Item.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

// Definición de propTypes para validar las propiedades recibidas
Item.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

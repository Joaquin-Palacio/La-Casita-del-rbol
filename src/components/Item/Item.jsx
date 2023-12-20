import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Item = ({id, nombre, precio, img }) => {
  return (
    <div>
      <img src={img} alt="imagen producto" />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

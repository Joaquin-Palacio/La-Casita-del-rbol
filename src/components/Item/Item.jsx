import PropTypes from "prop-types";

export const Item = ({nombre, precio, img }) => {
  return (
    <div>
      <img src={img} alt="imagen producto" />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <button>Ver Detalles</button>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

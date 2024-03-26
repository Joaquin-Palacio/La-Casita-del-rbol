import { Item } from '../Item/Item';
import PropTypes from 'prop-types';

export const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div key={producto.id} className="col-12 col-sm-6 col-lg-3 col-md-4">
          <Item {...producto} />
        </div>
      ))}
    </div>
  );
};

ItemList.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
};

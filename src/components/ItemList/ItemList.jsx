import { Item } from '../Item/Item';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

export const ItemList = ({ productos }) => {
  return (
    <Row>
      {productos.map((producto) => (
        <Col key={producto.id} sm={6} md={4} lg={3}>
          <Item {...producto} />
        </Col>
      ))}
    </Row>
  );
};

ItemList.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

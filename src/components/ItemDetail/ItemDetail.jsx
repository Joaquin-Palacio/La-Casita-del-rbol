import { useState, useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
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
    <Container className="text-center">
      <Card className="cardDetail">
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Img src={img} alt={nombre} />
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>Unidades Disponibles: {stock}</Card.Text>
          <Card.Text className='detail-precio'>${precio}</Card.Text>
        </Card.Body>
        {addCantidad > 0 ? (
          <div>
            <Link to="/cart" className="btn btn-primary m-2">
              Terminar compra
            </Link>
            <Link to="/" className="btn btn-success m-2">
              Ver más productos
            </Link>
          </div>
        ) : (
          <ItemCount
            valorInicial={1}
            stock={stock}
            addCarrito={handleCantidad}
          />
        )}
      </Card>
    </Container>
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

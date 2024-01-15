import { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';

export const ItemDetail = ({ id, nombre, img, precio, stock }) => {
  const [addCantidad, setAddCantidad] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleCantidad = (cantidad) => {
    setAddCantidad(cantidad);

    const item = { id, nombre, precio };
    addItem(item, cantidad);
  };

  return (
    <Card className="text-center cardDetail">
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Img src={img} alt={nombre} />
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          possimus porro dicta deleniti odit, iste quas labore ea optio quae
          aspernatur fugit quisquam? Iste modi, vel distinctio rem explicabo
          maxime.
        </Card.Text>
        <Card.Text>Unidades Disponibles: {stock}</Card.Text>
        <Card.Text>${precio}</Card.Text>
      </Card.Body>
      {addCantidad > 0 ? (
        <Link to="/cart" className="btn btn-primary p-1">
          Terminar compra
        </Link>
      ) : (
        <ItemCount valorInicial={1} stock={stock} addCarrito={handleCantidad} />
      )}
    </Card>
  );
};

ItemDetail.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

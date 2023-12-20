import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './Item.css';

export const Item = ({ id, nombre, precio, img }) => {
  return (
    <Card className="text-center cardItem">
      <Card.Img variant="top" src={img} alt="imagen producto" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>${precio}</Card.Text>
        <Button as={Link} to={`/item/${id}`} variant="primary">
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

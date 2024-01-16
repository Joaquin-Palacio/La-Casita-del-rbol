// Importación de PropTypes para la validación de tipos de propiedades
import PropTypes from 'prop-types';

// Importación de Link para la navegación a través de react-router-dom
import { Link } from 'react-router-dom';

// Importación de componentes de Bootstrap (Card y Button)
import { Card, Button } from 'react-bootstrap';

// Importación del archivo de estilos para el componente Item
import './Item.css';

// Definición del componente funcional Item
export const Item = ({ id, nombre, precio, img }) => {
  // Renderizado de la tarjeta (Card) para mostrar información del producto
  return (
    <Card className="text-center cardItem">
      <Card.Img variant="top" src={img} alt="imagen producto" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>${precio}</Card.Text>
        {/* Botón que actúa como Link a la página de detalles del producto */}
        <Button as={Link} to={`/item/${id}`} variant="primary">
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
};

// Definición de propTypes para validar las propiedades recibidas
Item.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

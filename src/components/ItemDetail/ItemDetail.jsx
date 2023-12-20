import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import './ItemDetail.css';

export const ItemDetail = ({ nombre, img, precio }) => {
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
        <Card.Text>${precio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

ItemDetail.propTypes = {
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

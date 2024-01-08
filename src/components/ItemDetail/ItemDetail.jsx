import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ nombre, img, precio, stock }) => {
  const [addCantidad, setAddCantidad] = useState(0);

  const handleCantidad = (cantidad) => {
    setAddCantidad(cantidad);
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
        <Card.Text>${precio}</Card.Text>
      </Card.Body>
      {addCantidad > 0 ? (
        <Link to="/cart">Terminar compra</Link>
      ) : (
        <ItemCount valorInicial={1} stock={stock} addCarrito={handleCantidad} />
      )}
    </Card>
  );
};

ItemDetail.propTypes = {
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

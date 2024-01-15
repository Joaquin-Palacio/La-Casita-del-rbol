import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, Container, Row } from 'react-bootstrap';

export const ItemCount = ({ valorInicial, stock, addCarrito }) => {
  const [contador, setContador] = useState(valorInicial);

  const handleSuma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleResta = () => {
    if (contador > valorInicial) {
      setContador(contador - 1);
    }
  };

  return (
    <Container>
      <Row>
        <InputGroup className="justify-content-center">
          <Button variant="outline-primary" onClick={handleResta}>
            -
          </Button>
          <InputGroup.Text>{contador}</InputGroup.Text>
          <Button variant="outline-primary" onClick={handleSuma}>
            +
          </Button>
        </InputGroup>
      </Row>
      <Button
        className="m-3 p-1 w-25"
        variant="success"
        onClick={() => addCarrito(contador)}
      >
        Agregar al Carrito
      </Button>
    </Container>
  );
};

ItemCount.propTypes = {
  valorInicial: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  addCarrito: PropTypes.func.isRequired,
};

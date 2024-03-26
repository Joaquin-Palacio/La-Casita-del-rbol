// Importación de React y useState para el manejo de estados
import { useState } from 'react';

// Importación de PropTypes para la validación de tipos de propiedades
import PropTypes from 'prop-types';

// Importación de componentes de Bootstrap (Button, InputGroup, Container, Row)
import { Button, InputGroup } from 'react-bootstrap';

// Definición del componente funcional ItemCount
export const ItemCount = ({ valorInicial, stock, addCarrito }) => {
  // Estado para el contador de productos
  const [contador, setContador] = useState(valorInicial);

  // Función para incrementar el contador si no se ha alcanzado el stock máximo
  const handleSuma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  // Función para decrementar el contador si no se ha alcanzado el valor inicial
  const handleResta = () => {
    if (contador > valorInicial) {
      setContador(contador - 1);
    }
  };

  // Renderizado del componente
  return (
    <div className='container'>
      <div className='row'>
        {/* Grupo de entrada (InputGroup) para mostrar el contador y botones de incremento/decremento */}
        <InputGroup className="justify-content-center">
          <Button variant="outline-primary" onClick={handleResta}>
            -
          </Button>
          <InputGroup.Text>{contador}</InputGroup.Text>
          <Button variant="outline-primary" onClick={handleSuma}>
            +
          </Button>
        </InputGroup>
      </div>
      {/* Botón para agregar al carrito con la cantidad seleccionada */}
      <Button
        className="m-3 p-1 w-25"
        variant="success"
        onClick={() => addCarrito(contador)}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

// Definición de propTypes para validar las propiedades recibidas
ItemCount.propTypes = {
  valorInicial: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  addCarrito: PropTypes.func.isRequired,
};

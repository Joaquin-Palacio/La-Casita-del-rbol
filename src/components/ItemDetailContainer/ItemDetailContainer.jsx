import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getItem } from "../../asyncmock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getItem(idItem).then((res) => setProducto(res));
  }, [idItem]);

  return (
    <Container>
      {producto && <ItemDetail {...producto} />}
    </Container>
    );
};

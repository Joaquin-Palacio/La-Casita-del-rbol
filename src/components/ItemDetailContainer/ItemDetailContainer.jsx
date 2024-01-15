import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, 'productos', idItem);
    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setProducto(newProduct);
      })
      .catch((error) => console.log('Hubo un error', error));
  }, [idItem]);

  return <Container>{producto && <ItemDetail {...producto} />}</Container>;
};

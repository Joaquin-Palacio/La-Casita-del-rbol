import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const allProductos = idCategoria
      ? query(
          collection(db, 'productos'),
          where('categoria', '==', idCategoria)
        )
      : collection(db, 'productos');

    getDocs(allProductos)
      .then((res) => {
        const newProducts = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(newProducts);
      })
      .catch((error) => console.log('Hubo un problema', error));
  }, [idCategoria]);

  return (
    <div className="container">
      <h2>Nuestros Productos</h2>
      <div className="row">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

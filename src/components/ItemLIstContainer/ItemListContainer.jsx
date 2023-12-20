import { useState, useEffect } from "react";
import { getProductos, getCategory } from "../../asyncmock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const products = idCategoria ? getCategory : getProductos;

    products(idCategoria).then((res) => setProductos(res));
  }, [idCategoria]);

  return (
    <div>
      <h2>Nuestros Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

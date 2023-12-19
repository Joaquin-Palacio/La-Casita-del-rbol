import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((res) => setProductos(res));
  }, []);

  return (
    <div>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

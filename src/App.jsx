import { ItemListContainer } from "./components/ItemLIstContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Loli-Shop" />
    </div>
  );
};

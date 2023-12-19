import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Loli-Shop</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/1" > Hombres </NavLink>
          </li>
          <li>
            <NavLink to="categoria/2"> Mujeres </NavLink>
          </li>
          <li>
            <NavLink to="categoria/3"> Niños </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

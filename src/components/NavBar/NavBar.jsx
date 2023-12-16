import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
  return (
    <header>
        <h1>Loli-Shop</h1>

        <nav>
            <ul>
                <li>Hombres</li>
                <li>Mujeres</li>
                <li>Niños</li>
            </ul>
        </nav>

        <CartWidget />
    </header>
  )
}

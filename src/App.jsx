import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sobrenosotros" element={<AboutUs />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

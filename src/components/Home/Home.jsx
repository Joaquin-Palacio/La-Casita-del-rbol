import './Home.css';

export const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenidos a La Casita del Árbol</h1>
      <p>Descubre nuestros juguetes de madera, diseñados para inspirar y educar a los más pequeños.</p>
      <div className="home-featured">
        {/* Aquí puedes añadir productos destacados, ofertas, o un botón para ver todos los productos */}
        <a href="/productos" className="home-link">Ver todos los productos</a>
      </div>
    </div>
  );
};

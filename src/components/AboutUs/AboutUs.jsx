import './AboutUs.css';
import logoCasita from '../../../public/lacasitadelarbol.jpg.webp';

export const AboutUs = () => {
  return (
    <div className="about-us text-center">
      <h1>Sobre Nosotros</h1>
      <img src={logoCasita} alt="Logo de La Casita del Árbol" />
      <p>
        Bienvenidos a La Casita del Árbol, Soy Valeria, una nueva emprendedora,
        maestra jardinera y amante de la niñez. Aquí celebramos la magia de los
        juguetes de madera. Ofrecemos juguetes seguros y educativos, diseñados
        para inspirar creatividad y aprendizaje en los niños. Cada producto ha
        sido cuidadosamente seleccionado para asegurar la calidad y durabilidad,
        manteniendo el enfoque en la sostenibilidad y el respeto al medio
        ambiente.
      </p>
    </div>
  );
};

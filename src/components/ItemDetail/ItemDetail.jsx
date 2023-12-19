import PropTypes from 'prop-types';

export const ItemDetail = ({ nombre, img, precio }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <img src={img} alt={nombre} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam possimus
        porro dicta deleniti odit, iste quas labore ea optio quae aspernatur
        fugit quisquam? Iste modi, vel distinctio rem explicabo maxime.
      </p>
      <p>{precio}</p>
    </div>
  );
};

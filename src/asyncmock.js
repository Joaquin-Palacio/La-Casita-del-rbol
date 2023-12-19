const productos = [
  {
    id: 1,
    nombre: "Camiseta Titular River Plate",
    precio: 50000,
    img: "./img/titularRiver",
  },
  {
    id: 2,
    nombre: "Camiseta Suplente River Plate",
    precio: 45000,
    img: "./img/suplenteRiver",
  },
  {
    id: 3,
    nombre: "Camiseta Alternativa River Plate",
    precio: 45000,
    img: "./img/alternativaRiver",
  },
  {
    id: 4,
    nombre: "Campera River Plate",
    precio: 50000,
    img: "./img/camperaRiver",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

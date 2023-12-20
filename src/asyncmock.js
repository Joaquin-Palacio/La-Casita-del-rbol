const productos = [
  {
    id: "1",
    nombre: "Camiseta Titular River Plate",
    precio: 50000,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/401778e50ef4449d9656d40e9346b8af_9366/Camiseta_Titular_River_Plate_23-24_Blanco_HT3679_01_laydown.jpg",
    idCat: "camisetas",
  },
  {
    id: "2",
    nombre: "Camiseta Suplente River Plate",
    precio: 45000,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/356d8076ce52440facb522ba34263bee_9366/Camiseta_Alternativa_River_Plate_23-24_Rojo_HT3688_01_laydown.jpg",
    idCat: "camisetas",
  },
  {
    id: "3",
    nombre: "Camiseta Alternativa River Plate",
    precio: 45000,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2e5694c396c74bcfa0104e7476fd19ba_9366/Camiseta_Tercer_Uniforme_River_Plate_23-24_Ninos_Negro_HT9873_01_laydown.jpg",
    idCat: "camisetas",
  },
  {
    id: "4",
    nombre: "Campera River Plate",
    precio: 50000,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5a16142c0044330b29fafd2018353ec_9366/Campera_River_Plate_Condivo_22_Anthem_Blanco_HC3500_01_laydown.jpg",
    idCat: "camperas",
  },
  {
    id: "5",
    nombre: "Pantalón River Plate",
    precio: 30000,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a811aeb8bb0648beaf7daea9009ae5bf_9366/Pantalon_de_Entrenamiento_Condivo_22_River_Plate_Verde_HC1055_01_laydown.jpg",
    idCat: "pantalones",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((i) => i.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getCategory = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categoria = productos.filter((c) => c.idCat === idCategoria);
      resolve(categoria);
    }, 100);
  });
};

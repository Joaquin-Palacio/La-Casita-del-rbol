const productos = [
  {
    id: "1",
    nombre: "Camiseta River Plate",
    precio: 50000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/401778e50ef4449d9656d40e9346b8af_9366/Camiseta_Titular_River_Plate_23-24_Blanco_HT3679_01_laydown.jpg",
    idCat: "camisetas",
  },
  {
    id: "2",
    nombre: "Camiseta River Plate",
    precio: 45000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/356d8076ce52440facb522ba34263bee_9366/Camiseta_Alternativa_River_Plate_23-24_Rojo_HT3688_01_laydown.jpg",
    idCat: "camisetas",
  },
  {
    id: "3",
    nombre: "Camiseta River Plate",
    precio: 45000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2e5694c396c74bcfa0104e7476fd19ba_9366/Camiseta_Tercer_Uniforme_River_Plate_23-24_Ninos_Negro_HT9873_01_laydown.jpg",
    idCat: "camisetas",
  },
  {
    id: "4",
    nombre: "Campera River Plate",
    precio: 50000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5a16142c0044330b29fafd2018353ec_9366/Campera_River_Plate_Condivo_22_Anthem_Blanco_HC3500_01_laydown.jpg",
    idCat: "camperas",
  },
  {
    id: "5",
    nombre: "Pantalón River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a811aeb8bb0648beaf7daea9009ae5bf_9366/Pantalon_de_Entrenamiento_Condivo_22_River_Plate_Verde_HC1055_01_laydown.jpg",
    idCat: "pantalones",
  },
  {
    id: "6",
    nombre: "Campera River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8cc16ebddd8c4971b8c9af33011b32d4_9366/Campera_de_Presentacion_River_Plate_Condivo_22_Beige_HC1057_01_laydown.jpg",
    idCat: "camperas",
  },
  {
    id: "7",
    nombre: "Short River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5fdfc8ec95944511a45eaee6010ca511_9366/Short_Uniforme_Titular_River_Plate_22-23_Negro_HE6309_01_laydown.jpg",
    idCat: "pantalones",
  },
  {
    id: "8",
    nombre: "Buzo River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15450acd1a4c48619da2af860106a616_9366/Buzo_Ligero_de_Entrenamiento_Condivo_22_River_Plate_Verde_HC1042_01_laydown.jpg",
    idCat: "buzos",
  },
  {
    id: "9",
    nombre: "Buzo River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0bf352d5f13a45d187361ce2fdcb029c_9366/Buzo_Rojo_con_Capucha_River_Plate_Rojo_IU6090_01_laydown.jpg",
    idCat: "buzos",
  },
  {
    id: "10",
    nombre: "Short River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a73751a6bc34410c8c640575912f8ee4_9366/Short_Uniforme_Alternativo_River_Plate_23-24_Rojo_HT3689_01_laydown.jpg",
    idCat: "pantalones",
  },
  {
    id: "11",
    nombre: "Buzo River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e699667b858b4b92998b061b8a907612_9366/Buzo_Negro_con_Capucha_River_Plate_Negro_IU6092_01_laydown.jpg",
    idCat: "buzos",
  },
  {
    id: "12",
    nombre: "Camiseta River Plate",
    precio: 30000,
    stock: 10,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd8858e302f04e8f8039ffe9448238c4_9366/Camiseta_de_Calentamiento_River_Plate_Rojo_HY0448_01_laydown.jpg",
    idCat: "camisetas",
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

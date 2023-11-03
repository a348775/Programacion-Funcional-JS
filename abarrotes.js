const DAO = require('./dao');

const dao = new DAO('productos.json');
const products = dao.getProducts();

const productsWithExistenceAbove20 = products.filter(product => product.existencia > 20).length;

const productsWithExistenceBelow15 = products.filter(product => product.existencia < 15).length;

const productsSameClassificationAndPriceAbove15 = products.filter(product => product.clasificacion === 'limpieza' && product.precio > 15.50);

const productsWithPriceBetween20And45 = products.filter(product => product.precio > 20.30 && product.precio < 45.00);

const productsByClassification = products.reduce((accumulator, product) => {
  accumulator[product.clasificacion] = (accumulator[product.clasificacion] || 0) + 1;
  return accumulator;
}, {});

console.log('Numero de productos con existencia mayor a 20:', productsWithExistenceAbove20);
console.log('Numero de productos con existencia menos a 15:', productsWithExistenceBelow15);
console.log('Lista de productos con la misma clasificacion y precio mayor 15.50:', productsSameClassificationAndPriceAbove15);
console.log('Lista de productos con precio mayor a 20.30 y menor a 45.00:', productsWithPriceBetween20And45);
console.log('Numero de productos agrupados por su clasificacion:', productsByClassification);


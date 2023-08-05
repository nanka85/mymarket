const { getProducts } = require('../controller/products.controller');
const store=require('../db/store');
const getLatestId = () => store[store.length - 1].id + 1;

const getProducts = () => store.filter((p) => !p.isDeleted);

const getProductById = (id) => store.find((p) => +p.id === +id && !p.isDeleted)

const addProduct = (payload) => store.push({ id: getLatestId(), ...payload, isDeleted: false });

const updateProduct = (id, payload) => {
  const productIndex = store.findIndex((p) => p.id === id);

  store[productIndex] = {
    ...store[productIndex],
    ...payload,
  };
};

const deleteProduct = (id) => {
  const productIndex = store.findIndex((p) => p.id === id);

  store[productIndex] = {
    ...[store.productIndex],
    isDeleted: true,
  }
}

module.exports = {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
}
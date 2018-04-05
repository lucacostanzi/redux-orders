import * as types from "./actionTypes";
import fetchData from "../api/api";

const request = type => () => ({
  type,
});

const requestSuccess = type => (resp, query) => ({
  type,
  payload: resp,
  query,
});

const requestFail = type => error => ({
  type,
  payload: error,
});

export const fetchOrders = fetchData('data/orders.json', [
  request(types.REQUEST_ORDERS),
  requestSuccess(types.FETCH_ORDERS_SUCCESS),
  requestFail(types.FETCH_ORDERS_FAIL)]);
export const fetchProducts = fetchData('data/products.json', [
  request(types.REQUEST_PRODUCTS),
  requestSuccess(types.FETCH_PRODUCTS_SUCCESS),
  requestFail(types.FETCH_PRODUCTS_FAIL)]);
export const fetchCustomers = fetchData('data/customers.json', [
  request(types.REQUEST_CUSTOMERS),
  requestSuccess(types.FETCH_CUSTOMERS_SUCCESS),
  requestFail(types.FETCH_CUSTOMERS_FAIL)]);
export const fetchCategories = fetchData('data/categories.json', [
  request(types.REQUEST_CATEGORIES),
  requestSuccess(types.FETCH_CATEGORIES_SUCCESS),
  requestFail(types.FETCH_CATEGORIES_FAIL)]);

export const getAllData = () => dispatch => Promise.all([
  dispatch(fetchCategories()),
  dispatch(fetchOrders()),
  dispatch(fetchProducts()),
  dispatch(fetchCustomers()),
]);


export const setItemsQuantity = (orderId, itemId, quantity) => ({
  type: types.SET_ITEMS_QUANTITY,
  orderId,
  itemId,
  quantity,
});

export const handleSubmitOrder = (orderId, order) => fetchData('data/update.json', [request(types.SUBMIT_ORDER), requestSuccess(types.SUBMIT_ORDER_SUCCESS), requestFail(types.SUBMIT_ORDER_FAIL)], "GET", { orderId }, { order: JSON.stringify(order) });

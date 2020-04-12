import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./types";

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const checkoutCart = (order) => ({
  type: CHECKOUT,
  payload: order,
});

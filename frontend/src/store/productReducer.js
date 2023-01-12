import { SET_PRODUCT } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.data;
    default:
      return data;
  }
};

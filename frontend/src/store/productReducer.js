import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "./constant";
export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return action.data;
    case PRODUCT_LIST_FAIL:
      console.log(action.data);
      return action.data;
    default:
      return data;
  }
};

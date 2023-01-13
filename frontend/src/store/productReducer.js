import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  SET_PRODUCT_DETAIL,
} from "./constant";
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
export const productDetailData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAIL:
      return action.data;
    default:
      return data;
  }
};

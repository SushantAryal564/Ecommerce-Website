import { PRODUCT_DETAIL } from "./constant";

export const productDetailAction = (id) => {
  return {
    type: PRODUCT_DETAIL,
    data: id,
  };
};

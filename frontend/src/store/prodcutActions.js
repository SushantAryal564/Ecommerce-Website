import { PRODUCT_LIST } from "./constant";

export const productAction = () => {
  console.log("I am here");
  return {
    type: PRODUCT_LIST,
  };
};

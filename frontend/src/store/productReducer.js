import { SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return action.data.data;
    default:
      return data;
  }
};
// import {
//   PRODUCT_LIST_FAIL,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_LIST_REQUEST,
// } from "./constant";
// export const productReducer = (state = { data: [], loading: true }, action) => {
//   switch (action.type) {
//     case PRODUCT_LIST_REQUEST:
//       return { loading: true, data: null };
//     case PRODUCT_LIST_SUCCESS:
//       return { loading: false, data: action.data };
//     case PRODUCT_LIST_FAIL:
//       return { loading: false, error: action.data };
//     default:
//       return state;
//   }
// };

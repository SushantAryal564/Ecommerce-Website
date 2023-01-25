import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { productDetailsReducer, productListReducer } from "./productReducers";
const reducer = combineReducers({
  product: productListReducer,
  productDetail: productDetailsReducer,
});
const store = configureStore({
  reducer,
});
export default store;

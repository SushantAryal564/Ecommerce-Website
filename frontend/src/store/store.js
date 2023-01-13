import { configureStore } from "@reduxjs/toolkit";
import { productData, productDetailData } from "./../store/productReducer";
import productSaga from "./productSaga";
import { productDetailSaga } from "./productSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { product: productData, productDetail: productDetailData },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
sagaMiddleware.run(productDetailSaga);
export default store;

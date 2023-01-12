import { configureStore } from "@reduxjs/toolkit";
import { productData } from "./../store/productReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { product: productData },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
export default store;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { productData } from "./productReducer";
import ProductSaga from "./productSaga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { products: productData },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(ProductSaga);
export default store;

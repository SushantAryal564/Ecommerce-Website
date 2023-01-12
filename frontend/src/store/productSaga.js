import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
function* getProducts() {
  let data = yield fetch("http://127.0.0.1:8000/api/products/");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;

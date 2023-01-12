import { takeEvery, put } from "redux-saga/effects";
import { GET_PRODUCT, SET_PRODUCT } from "./constant";
function* getProduct() {
  let data = yield fetch("http://127.0.0.1:8000/api/products/");
  data = yield data.json();
  yield put({ type: SET_PRODUCT, data });
}

function* ProductSaga() {
  yield takeEvery(GET_PRODUCT, getProduct);
}
export default ProductSaga;

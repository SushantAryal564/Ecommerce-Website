import { takeEvery, put } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  PRODUCT_LIST_SUCCESS,
  SET_PRODUCT_DETAIL,
  PRODUCT_DETAIL,
} from "./constant";
import axios from "axios";

function* getProducts() {
  let datas = yield axios.get("http://127.0.0.1:8000/api/products/");
  let data = datas.data;
  yield put({ type: PRODUCT_LIST_SUCCESS, data });
}
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;

function* getProductsDetail(dataid) {
  let result = yield axios.get(
    `http://127.0.0.1:8000/api/products/${dataid.data}`
  );
  let data = result.data;
  yield put({ type: SET_PRODUCT_DETAIL, data });
}
export function* productDetailSaga() {
  yield takeEvery(PRODUCT_DETAIL, getProductsDetail);
}

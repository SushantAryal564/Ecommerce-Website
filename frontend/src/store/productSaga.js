import { takeEvery, put } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  SET_PRODUCT_LIST,
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

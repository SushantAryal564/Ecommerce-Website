import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import axios from "axios";
function* getProducts() {
  let data = { data: {}, loading: true };
  let datas = yield axios.get("http://127.0.0.1:8000/api/products/");
  data = { data: datas.data, loading: true };
  yield put({ type: SET_PRODUCT_LIST, data });
}
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;
// import {
//   PRODUCT_LIST,
//   PRODUCT_LIST_FAIL,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_LIST_REQUEST,
// } from "./constant";

// import { takeEvery, put } from "redux-saga/effects";
// import axios from "axios";
// function* getProducts() {
//   try {
//     let data = null;
//     yield put({ type: PRODUCT_LIST_REQUEST, data });
//     let datas = yield axios.get("http://127.0.0.1:8000/api/products/");
//     data = datas.data;
//     yield put({ type: PRODUCT_LIST_SUCCESS, data });
//   } catch (error) {
//     console.log(error);
//     let data =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     yield put({ type: PRODUCT_LIST_FAIL, data });
//   }
// }
// function* productSaga() {
//   yield takeEvery(PRODUCT_LIST, getProducts);
// }
// export default productSaga;

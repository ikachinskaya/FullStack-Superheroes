/*
здесь хранятся побочные эффекты - запросы на сервер
*/
import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { createHeroSaga } from "./heroSagas";

/*
функция-генератор

yield - используется для остановки и возобновления функций-генераторов

takeLatest - позволяет одновременно запускать только один обработчик функции.
Если другое действие запускается, когда обработчик все еще работает, 
он отменяет его и запускается снова с последними доступными данными.
*/
function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHeroSaga);
}

export default rootSaga;

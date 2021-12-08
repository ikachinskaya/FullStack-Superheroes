import { put } from "redux-saga/effects";
import * as HeroActionCreators from "../actions/heroActionCreators";
import * as API from "../api/";

/*
функция-генератор
здесь отправляем запрос на сервер
в action.payload хранятся данные про героя, которого мы создаем
axios всегда возвращает объект со свойством data
в свойств data лежит data, которую мы возвращаем в контроллере на сервере
put - кладет новый action
*/
export function* createHeroSaga(action) {
  try {
    const response = yield API.createHero(action.payload);
    const {
      data: {
        data: [hero],
      },
    } = response;
    yield put(HeroActionCreators.createHeroSuccess(hero));
    console.log(response);
  } catch (error) {
    yield put(HeroActionCreators.createHeroError(error));
  }
}

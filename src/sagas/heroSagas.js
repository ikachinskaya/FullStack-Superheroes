import { put } from "redux-saga/effects";
import * as HeroActionCreators from "../actions/heroActionCreators";
import * as API from "../api/";

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

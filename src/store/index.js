import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;

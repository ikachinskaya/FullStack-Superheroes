/*
это хранилище всех состояний
*/
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

/*
sagaMiddleWare - промежуточная функция для поключения саги к хранилищу
создаем сагу
*/
const sagaMiddleWare = createSagaMiddleware();

/*
создаем хранилище для всех состояний
composeWithDevTools - для подключения расширения в браузере для работы с redux
*/
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

//запускаем промежуточную сагу и передаем ей функцию-генератор rootSaga
sagaMiddleWare.run(rootSaga);

export default store;

import ACTION_TYPES from "./actionTypes";

/*
 создаем объект-actions
 payload - полезная нагрузка
*/
export const createHeroRequest = (values) => {
  return {
    type: ACTION_TYPES.CREATE_HERO_REQUEST,
    payload: values,
  };
};

export const createHeroSuccess = (values) => {
  return {
    type: ACTION_TYPES.CREATE_HERO_SUCCESS,
    payload: values,
  };
};

export const createHeroError = (error) => {
  return {
    type: ACTION_TYPES.CREATE_HERO_ERROR,
    payload: error,
  };
};

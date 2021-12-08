import ACTION_TYPES from "../actions/actionTypes";

//начальное состояние, которое можно показать клиенту, пока будет формироваться запрос
const initialState = {
  heroes: [],
  isLoading: false,
  error: null,
};

/*
функция, принимает состояние и действие(action из heroActionCreators.js) 
для изменения этого состояния
передается в combineReducers
*/
const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }

    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      //берем героев из старого состояния и нового из actions
      const newHeroes = [...state.heroes, action.playload];
      const newState = {
        ...state,
        isLoading: false,
        heroes: newHeroes,
      };
      return newState;
    }

    case ACTION_TYPES.CREATE_HERO_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.playload,
      };
    }

    default:
      return state;
  }
};

export default heroReducer;

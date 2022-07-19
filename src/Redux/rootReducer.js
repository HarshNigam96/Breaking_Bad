import { ADD_FAV, GET_DATA, REMOVE_FAV } from "./actionTypes";

const init = {
  data: [],
  fav: [],
};

export const rootReducer = (state = init, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_FAV:
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        fav: action.payload,
      };

    default:
      return state;
  }
};

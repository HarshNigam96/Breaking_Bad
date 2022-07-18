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
      const getData = state.data.find((val) => val.char_id === action.payload);
      return {
        ...state,
        data: state.data.map((val) =>
          val.char_id === action.payload ? { ...val, isFav: true } : val
        ),
        fav: [...state.fav, { ...getData }],
      };
    case REMOVE_FAV:
      return {
        ...state,
        data: state.data.map((val) =>
          val.char_id === action.payload ? { ...val, isFav: false } : val
        ),
        fav: state.fav.filter((val) => val.char_id !== action.payload),
      };
    default:
      return state;
  }
};

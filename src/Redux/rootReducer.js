import { FAV_ITEM, GET_DATA } from "./actionTypes";

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

    case FAV_ITEM:
      let favItems = [...state.fav];
      const pos = favItems.findIndex((i) => i === action.payload.char_id);
      if (pos === -1) {
        favItems.push(action.payload.char_id);
      } else {
        favItems.splice(pos, 1);
      }
      return {
        ...state,
        fav: favItems,
      };

    default:
      return state;
  }
};

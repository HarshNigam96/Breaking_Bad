import { FAV_ITEM, GET_DATA } from "./actionTypes";

const init = {
  data: [],
  fav: [],
};

export const rootReducer = (
  state = init,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case FAV_ITEM:
      const favItems: any[] = [...state.fav];
      const pos = favItems.findIndex(
        (i: number) => i === action.payload.char_id
      );
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

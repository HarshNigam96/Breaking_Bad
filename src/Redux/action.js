import { ADD_FAV, GET_DATA, REMOVE_FAV } from "./actionTypes";

export const GetData = (val) => {
  return {
    type: GET_DATA,
    payload: val,
  };
};

export const AddFav = (item) => {
  return {
    type: ADD_FAV,
    payload: item,
  };
};

export const RemoveFav = (removeFav) => {
  return {
    type: REMOVE_FAV,
    payload: removeFav,
  };
};

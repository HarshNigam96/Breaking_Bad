import { ADD_FAV, GET_DATA, REMOVE_FAV } from "./actionTypes";

export const GetData = (val) => {
  return {
    type: GET_DATA,
    payload: val,
  };
};

export const AddFav = (id) => {
  return {
    type: ADD_FAV,
    payload: id,
  };
};

export const RemoveFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

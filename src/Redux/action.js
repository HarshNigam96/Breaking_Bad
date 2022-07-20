import { FAV_ITEM, GET_DATA } from "./actionTypes";

export const GetData = (val) => {
  return {
    type: GET_DATA,
    payload: val,
  };
};
export const ToggleFav = (item) => {
  return {
    type: FAV_ITEM,
    payload: item,
  };
};

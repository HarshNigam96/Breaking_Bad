import { FAV_ITEM, GET_DATA } from "./actionTypes";

export const GetData = (val: any) => {
  return {
    type: GET_DATA,
    payload: val,
  };
};
export const ToggleFav = (item: any) => {
  return {
    type: FAV_ITEM,
    payload: item,
  };
};

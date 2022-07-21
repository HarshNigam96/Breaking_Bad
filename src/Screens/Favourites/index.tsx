import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { ToggleFav } from "../../Redux/action";
import { CharacterModal } from "../../interfaces/interface";

const Favourites = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((val: any) => val.GetCharacters);

  const onClickLike = (item: CharacterModal) => {
    dispatch(ToggleFav(item));
  };

  var favListItems = stateData.data.filter((data: any) => {
    return stateData.fav.some((val: any) => {
      return data.char_id === val;
    });
  });
  return (
    <div className={styles.grid_view}>
      {favListItems.map((val: any, i: number) => {
        return (
          <Card
            key={i}
            itemData={val}
            onLike={() => onClickLike(val)}
            params={{ data: val, index: i }}
          />
        );
      })}
    </div>
  );
};
export default Favourites;

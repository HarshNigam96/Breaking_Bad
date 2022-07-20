import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { ToggleFav } from "../../Redux/action";

const Favourites = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((val) => val);

  const onClickLike = (item) => {
    dispatch(ToggleFav(item));
  };

  var favListItems = stateData.data.filter((data) => {
    return stateData.fav.some((val) => {
      return data.char_id === val;
    });
  });
  return (
    <div className={styles.grid_view}>
      {favListItems.map((val, i) => {
        return (
          <Card
            key={i}
            itemData={val}
            onLike={() => onClickLike(val, i)}
            params={{ data: val, index: i }}
          />
        );
      })}
    </div>
  );
};
export default Favourites;

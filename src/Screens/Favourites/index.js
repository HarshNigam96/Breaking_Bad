import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { REMOVE_FAV } from "../../Redux/actionTypes";
const Favourites = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((val) => val.fav);
  const onClick = (item) => {
    let removeFav = stateData?.filter(
      (element) => element.char_id !== item.char_id
    );
    dispatch({
      type: REMOVE_FAV,
      payload: removeFav,
    });
  };
  return (
    <div className={styles.grid_view}>
      {stateData.map((val, i) => {
        return (
          <Card
            key={i}
            to={"/details"}
            name={val.name}
            nickname={val.nickname}
            portrayed={val.portrayed}
            img={val.img}
            onPress={() => onClick(val)}
            showFavorites={
              stateData.fav?.filter(
                (element) => element.char_id === val.char_id
              ).length === 0
                ? null
                : true
            }
            params={{ data: val, index: i }}
          />
        );
      })}
    </div>
  );
};
export default Favourites;

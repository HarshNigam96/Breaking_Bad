import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { ToggleFav } from "../../Redux/action";
const Home = () => {
  const stateData = useSelector((val) => val);
  const dispatch = useDispatch();

  const onClickLike = (data) => {
    dispatch(ToggleFav(data));
  };

  return (
    <div className={styles.grid_view}>
      {stateData.data.map((val, i) => {
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
export default Home;

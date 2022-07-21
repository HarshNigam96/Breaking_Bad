import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { ToggleFav } from "../../Redux/action";
import { CharacterModal } from "../../interfaces/interface";
const Home = () => {
  const stateData = useSelector((val: any) => val.GetCharacters);

  const dispatch = useDispatch();
  const onClickLike = (data: CharacterModal) => {
    dispatch(ToggleFav(data));
  };

  return (
    <div className={styles.grid_view}>
      {stateData.data.map((val: any, i: number) => {
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
export default Home;

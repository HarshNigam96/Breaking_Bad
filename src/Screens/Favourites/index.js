import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import HEART_FILLED from "../../assets/svgs/HEART_FILLED.svg";
import Card from "../../Components/CardComponent/Card";
import { RemoveFav } from "../../Redux/action";
const Favourites = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((val) => val.fav);

  return (
    <div className={styles.grid_view}>
      {stateData.map((val, i) => {
        return (
          <Card
            key={i}
            to={"/details"}
            name={val.name}
            favIcon={HEART_FILLED}
            nickname={val.nickname}
            portrayed={val.portrayed}
            img={val.img}
            addFav={() => dispatch(RemoveFav(val.char_id))}
            params={{ data: val }}
          />
        );
      })}
    </div>
  );
};
export default Favourites;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { AddFav, RemoveFav } from "../../Redux/action";
import HEART_FILLED from "../../assets/svgs/HEART_FILLED.svg";
import HEART from "../../assets/svgs/HEART.svg";
const Home = () => {
  const stateData = useSelector((val) => val.data);
  const dispatch = useDispatch();

  return (
    <div className={styles.grid_view}>
      {stateData.map((val, i) => {
        return (
          <Card
            key={i}
            to={"/details"}
            name={val.name}
            favIcon={val.isFav ? HEART_FILLED : HEART}
            nickname={val.nickname}
            portrayed={val.portrayed}
            img={val.img}
            addFav={() =>
              val.isFav
                ? dispatch(RemoveFav(val.char_id))
                : dispatch(AddFav(val.char_id))
            }
            params={{ data: val, index: i }}
          />
        );
      })}
    </div>
  );
};
export default Home;

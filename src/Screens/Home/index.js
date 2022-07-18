import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { AddFav, GetData, RemoveFav } from "../../Redux/action";
import { Character } from "../../api/index";
const Home = () => {
  const navigate = useNavigate();
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
            favIcon={
              val.isFav
                ? require("../../assets/ICONS/HEART_FILLED.png")
                : require("../../assets/ICONS/HEART.png")
            }
            nickname={val.nickname}
            portrayed={val.portrayed}
            img={val.img}
            addFav={() =>
              val.isFav
                ? dispatch(RemoveFav(val.char_id))
                : dispatch(AddFav(val.char_id))
            }
            params={{ data: val }}
          />
        );
      })}
    </div>
  );
};
export default Home;

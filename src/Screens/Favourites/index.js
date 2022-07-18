import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { RemoveFav } from "../../Redux/action";

const Favourites = () => {
  const navigate = useNavigate();
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
            favIcon={require("../../assets/ICONS/HEART_FILLED.png")}
            nickname={val.nickname}
            portrayed={val.portrayed}
            img={val.img}
            addFav={() => dispatch(RemoveFav(val.char_id))}
            params={{ data: val }}
            // onCardClick={() => navigate("/details")}
          />
        );
      })}
    </div>
  );
};
export default Favourites;

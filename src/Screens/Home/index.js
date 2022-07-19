import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";
import Card from "../../Components/CardComponent/Card";
import { AddFav, RemoveFav } from "../../Redux/action";
const Home = () => {
  const stateData = useSelector((val) => val);
  const dispatch = useDispatch();

  const onClick = (item) => {
    if (
      stateData.fav?.filter((element) => element.char_id === item.char_id)
        .length === 0
    ) {
      dispatch(AddFav(item));
    } else {
      let removeFav = stateData.fav?.filter(
        (element) => element.char_id !== item.char_id
      );
      dispatch(RemoveFav(removeFav));
    }
  };
  const renderCharacters = (val, i) => {
    return (
      <Card
        key={i}
        props={val}
        onPress={() => onClick(val)}
        favIcon={
          stateData.fav?.filter((element) => element.char_id === val.char_id)
            .length === 0
            ? null
            : true
        }
        params={{ data: val, index: i }}
      />
    );
  };
  return (
    <div className={styles.grid_view}>
      {stateData.data.map((val, i) => {
        return renderCharacters(val, i);
      })}
    </div>
  );
};
export default Home;

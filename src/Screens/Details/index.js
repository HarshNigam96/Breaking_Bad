import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
const Details = () => {
  const info = useLocation();
  const stateData = useSelector((val) => val.data);
  const {
    name,
    nickname,
    birthday,
    img,
    portrayed,
    occupation,
    appearance,
    char_id,
  } = info.state.data;

  return (
    <div className={styles.main_container}>
      <div
        style={{
          "--img": `url(${img})`,
        }}
        className={styles.background_image_container}
      >
        <Link to={"/"}>
          <img
            className={styles.back_icon}
            height={"16px"}
            width={"16px"}
            src={require("../../assets/ICONS/BACK.png")}
          />
        </Link>
        <div className={styles.main_image}>
          <img
            className={styles.characters_img}
            height={"210px"}
            width={"159px"}
            src={img}
          />
          <div>
            <h1 className={styles.char_name}>{name}</h1>
            <h1 className={styles.char_nickname}>{nickname}</h1>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <h4>Potrayed</h4>
        <div className={styles.potrayed_by}>
          <h5>{portrayed}</h5>
          {birthday !== "Unknown" && (
            <div className={styles.date_container}>
              <img
                height={"23px"}
                width={"23px"}
                src={require("../../assets/ICONS/GIFT.png")}
              />
              <h5 className={styles.date_text}>{birthday}</h5>
            </div>
          )}
        </div>
        <div className={styles.occupation_container}>
          <h4 className={styles.mtop}>Occupation</h4>
          <h5 className={styles.mtop}>{occupation[0]}</h5>
          <h5 className={styles.mtop}>{occupation[1]}</h5>
        </div>

        <h4 className={styles.appeared_in}>Appeared in</h4>
        <div className={styles.seasons_name_list}>
          {appearance.map((val, i) => (
            <h6 key={i} className={styles.seasons}>
              Season {val}
            </h6>
          ))}
        </div>
        <label className={styles.char_label_title}>Other characters</label>
        <div className={styles.characters_list}>
          {stateData.map(
            (val, i) =>
              val.char_id !== char_id &&
              i <= 2 && (
                <div key={i}>
                  <img
                    className={styles.characters_img}
                    height={"210px"}
                    width={"158px"}
                    src={val.img}
                  />
                  <h1 className={styles.name}>{val.name}</h1>
                  <h1>{val.nickname}</h1>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;

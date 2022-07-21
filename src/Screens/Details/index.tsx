import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import BACK_ARROW from "../../assets/svgs/backArrow.svg";
import BIRTHDAY_ICON from "../../assets/svgs/birthdayIcon.svg";
import styles from "./styles.module.css";
const Details = () => {
  const info: any = useLocation();
  const stateData = useSelector((val: any) => val.data);
  const { name, nickname, birthday, img, portrayed, occupation, appearance } =
    info.state.data;
  const indexValue = info.state.index;

  return (
    <div className={styles.main_container}>
      <div
        style={{
          backgroundImage: ` linear-gradient(to bottom, rgba(3, 3, 3, 0.5), rgba(7, 0, 0, 1)),
          url(${img})`,
        }}
        className={styles.background_image_container}
      >
        <Link to={"/"}>
          <img
            alt="back_icon"
            className={styles.back_icon}
            height={"16px"}
            width={"16px"}
            src={BACK_ARROW}
          />
        </Link>
        <div className={styles.main_image}>
          <img
            className={styles.characters_img}
            height={"210px"}
            width={"159px"}
            src={img}
            alt="char_img"
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
                alt="gift_icon"
                height={"23px"}
                width={"23px"}
                src={BIRTHDAY_ICON}
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
          {appearance.map((val: any, i: number) => (
            <h6 key={i} className={styles.seasons}>
              Season {val}
            </h6>
          ))}
        </div>
        <label className={styles.char_label_title}>Other characters</label>
        <div className={styles.characters_list}>
          {stateData
            ?.slice(indexValue + 1, indexValue + 4)
            .map((val: any, i: number) => (
              <div key={i}>
                <img
                  className={styles.characters_img}
                  height={"210px"}
                  width={"158px"}
                  src={val.img}
                  alt="poster"
                />
                <h1 className={styles.name}>{val.name}</h1>
                <h1>{val.nickname}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Details;

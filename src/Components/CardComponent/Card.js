import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import HEART_FILLED from "../../assets/svgs/HEART_FILLED.svg";
import HEART from "../../assets/svgs/HEART.svg";
const Card = (props) => {
  const { name, img, nickname, portrayed } = props.props;
  const { onPress, params } = props;

  return (
    <div className={styles.card_container}>
      <Link state={params} style={{ textDecoration: "none" }} to={"/details"}>
        <div className={styles.content_container}>
          <img
            alt="char_poster"
            className={styles.poster}
            width={"158px"}
            height={"210px"}
            src={img}
          />
          <div className={styles.detail}>
            <div>
              <h2 className={styles.name_text}>{name} </h2>
              <h5 className={styles.nickName_text}>{nickname}</h5>
              <div className={styles.potrayed_by}>
                <h1 className={styles.green_label}>Potrayed</h1>
                <h1>{portrayed}</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <img
        className={styles.fav_icon}
        alt="favIcon"
        onClick={onPress}
        height={"39px"}
        width={"44px"}
        src={props.favIcon ? HEART_FILLED : HEART}
      />
    </div>
  );
};
export default Card;

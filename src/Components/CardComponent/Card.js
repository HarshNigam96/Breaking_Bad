import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const Card = (props) => {
  const { params, to, img, name, nickname, portrayed, addFav, favIcon } = props;
  return (
    <div className={styles.card_container}>
      <Link state={params} style={{ textDecoration: "none" }} to={to}>
        <div className={styles.content_container}>
          <img
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
        onClick={addFav}
        height={"39px"}
        width={"44px"}
        src={favIcon}
      />
    </div>
  );
};
export default Card;

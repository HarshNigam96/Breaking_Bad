import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Character } from "../../api";
import styles from "./styles.module.css";
import { GetData } from "../../Redux/action";
const NavBar = (props) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { defaultNav = true } = props;
  useEffect(() => {
    fetch(`${Character}?name=${text}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(GetData(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [text]);
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        {defaultNav ? (
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <div className={styles.logo_container}>
              <img
                className={styles.back_icon}
                height={"36.71px"}
                width={"33.03px"}
                src={require("../../assets/ICONS/REACT_LOGO.png")}
              />
              <h1 className={styles.app_title}> The Breaking bad</h1>
            </div>
          </Link>
        ) : (
          <Link to={"/"}>
            <img
              className={styles.back_icon}
              height={"16px"}
              width={"16px"}
              src={require("../../assets/ICONS/BACK.png")}
            />
          </Link>
        )}
        {!defaultNav && (
          <Link
            style={{ textDecoration: "none" }}
            to={"/"}
            className={styles.app_logo}
          >
            <div className={styles.logo_container}>
              <img
                className={styles.back_icon}
                height={"36.71px"}
                width={"33.03px"}
                src={require("../../assets/ICONS/REACT_LOGO.png")}
              />
              <h1 className={styles.app_title}> The Breaking bad</h1>
            </div>
          </Link>
        )}

        {defaultNav ? (
          <ul className={styles.menu_container}>
            <li
              style={{ backgroundColor: toggle ? "#242424" : "black" }}
              className={styles.input_container}
            >
              {toggle && (
                <input
                  className={styles.input_field}
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              )}
              <img
                onClick={() => setToggle(!toggle)}
                height={"22.9px"}
                width={"20.23px"}
                src={require("../../assets/ICONS/SEARCH.png")}
              />
            </li>
            <li>
              <div
                className={styles.fav_icon}
                onClick={() => navigate("/favourites", { replace: true })}
              >
                <img
                  height={"22.9px"}
                  width={"20.23px"}
                  src={require("../../assets/ICONS/HEART_FILLED.png")}
                />
              </div>
            </li>
          </ul>
        ) : (
          <h1 className={styles.fav_text}>Favourites</h1>
        )}
      </div>
    </nav>
  );
};
export default NavBar;

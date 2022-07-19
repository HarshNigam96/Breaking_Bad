import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Character } from "../../api";
import BACK_ARROW from "../../assets/svgs/backArrow.svg";
import HEART_FILLED from "../../assets/svgs/HEART_FILLED.svg";
import SEARCH_ICON from "../../assets/svgs/searchIcon.svg";
import { GetData } from "../../Redux/action";
import styles from "./styles.module.css";
const NavBar = (props) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { defaultNav = true, showNavBar = true } = props;
  useEffect(() => {
    breakinBadApi();
  });
  const breakinBadApi = () => {
    fetch(`${Character}?name=${text}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(GetData(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <nav>
      {showNavBar ? (
        <div className={styles.nav_wrapper}>
          {defaultNav ? (
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <div className={styles.logo_container}>
                <img
                  alt="app_logo"
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
                src={BACK_ARROW}
                alt="back_icon"
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
                  alt="app_logo"
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
                  src={SEARCH_ICON}
                  alt="search_icon"
                />
              </li>
              <li>
                <div
                  className={styles.fav_icon}
                  onClick={() => navigate("/favourites", { replace: true })}
                >
                  <img
                    alt="fav"
                    height={"22.9px"}
                    width={"20.23px"}
                    src={HEART_FILLED}
                  />
                </div>
              </li>
            </ul>
          ) : (
            <h1 className={styles.fav_text}>Favourites</h1>
          )}
        </div>
      ) : null}
    </nav>
  );
};
export default NavBar;

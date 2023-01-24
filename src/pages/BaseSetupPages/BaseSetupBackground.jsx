import styles from "../../styles/BasePages/BaseSetupBackground.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context.js";
// import styles from "../styles/welcome.module.css";
// import aiSkull from "../assets/welcome/aiSkull.svg";
import logo1 from "../../assets/basePages/logo1.png";
import diamond from "../../assets/basePages/Rock2.png";
import circle from "../../assets/basePages/circle.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Setup1 from "./Setup1";
import Setup2 from "./Setup2";
import Setup3 from "./Setup3";
import Setup4 from "./Setup4";
import arrow from "../../assets/basePages/arrow.svg";

export default function BaseSetupBackground() {
  const { state } = useContext(GlobalContext);
  // console.log(state);
  // const [myVar, setMyVar] = useState(state.setupScreenCounter);
  // dispatch({
  //   type: 'USER_LOGIN',
  //   payload: "response.data.profile"
  // })
  // console.log(state.testing);
  // console.log(state.setupScreenCounter);
  // console.log(myVar);
  return (
    <>
      <img src={logo1} className={styles.logo1} alt="" />
      <img src={circle} className={styles.circle} alt="" />
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <img src={diamond} className={styles.diamond} alt="" />
          <div className={styles.headings}>
            <Typography
              variant="h2"
              sx={{
                align: "left",
                textAlign: "left",
                fontSize: { xs: 60 },
                ml: 2,
              }}
              color={"#4D5659"}
            >
              Base Setup
            </Typography>
            <Typography
              sx={{ ml: 2 }}
              variant="h6"
              align="left"
              color={"#A8A8A8"}
              gutterBottom
            >
              Complete your profile
            </Typography>
          </div>
          <div className={styles.card}>
            <img src={arrow} className={styles.arrow} alt="" />
            {/* <Setup4/> */}
            {state.setupScreenCounter === 1 ? <Setup1 /> : null}
            {state.setupScreenCounter === 2 ? <Setup2 /> : null}
            {state.setupScreenCounter === 3 ? <Setup3 /> : null}
            {state.setupScreenCounter === 4 ? <Setup4 /> : null}
            {state.setupScreenCounter > 4 ? <Setup3 /> : null}
            {/*               
      {state.setupScreenCounter === 5 ? <Setup5 /> : null}
   */}
          </div>
        </div>
        <div className={styles.rightBlueBar}>
          <div className={styles.progressBar}>
            <Typography variant="h4"> Quick & Easy Setup</Typography>
            <ul className={styles.progressUL}>
              <li>Role</li>
              <li className={styles.activeLI}>
                Products selling
                <span className={styles.progressCount}>1 out of 4</span>
              </li>
              <li>Target segents</li>
              <li>Target profile</li>
            </ul>
          </div>
          <div className={styles.needHelpFooter}>
            <Button sx={{ color: "white", textTransform: "none" }}>
              Need help? Connect with support
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

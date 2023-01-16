import styles from "../../styles/BaseSetupBackground.module.css";
// import styles from "../styles/welcome.module.css";
// import aiSkull from "../assets/welcome/aiSkull.svg";
import logo1 from "../../assets/basePages/logo1.png";
import diamond from "../../assets/basePages/diamond.svg";
import circle from "../../assets/basePages/circle.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BaseSetupBackground() {
  return (
    <>
      {/* <img src={logo1} className={styles.logo1} alt="" /> */}
      {/* <img src={diamond} className={styles.diamond} alt="" /> */}
      {/* <img src={circle} className={styles.circle} alt="" /> */}
      <div className={styles.container}>
        <div className={styles.leftSection}>hello</div>
        <div className={styles.rightBlueBar}>blue</div>
      </div>
    </>
  );
}

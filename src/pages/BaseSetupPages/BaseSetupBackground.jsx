import styles from "../../styles/BaseSetupBackground.module.css";
// import styles from "../styles/welcome.module.css";
// import aiSkull from "../assets/welcome/aiSkull.svg";
import logo1 from "../../assets/basePages/logo1.png";
import diamond from "../../assets/basePages/diamond.svg";
import circle from "../../assets/basePages/circle.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Setup1 from "./Setup1";
import arrow from "../../assets/basePages/arrow.svg";
export default function BaseSetupBackground() {
  return (
    <>
      <img src={logo1} className={styles.logo1} alt="" />
      <img src={circle} className={styles.circle} alt="" />
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <img src={diamond} className={styles.diamond} alt="" />
          <div className={styles.headings}>
            <Typography variant="h2" align="left">Base Setup</Typography>
            <Typography variant="h6" align="left">Complete your profile</Typography>
          </div>
          <div className={styles.card}>
            <img src={arrow} className={styles.arrow} alt="" />
            <Setup1 />
            {/* <Setup2/> */}
            {/* <Setup3/> */}
            {/* <Setup4/> */}
            {/* <Setup5/> */}
          </div>
        </div>
        <div className={styles.rightBlueBar}>
          <div className={styles.progressBar}>
            <h2>Quick & Easy Setup</h2>
            <ul>
              <li>Role</li>
              <li>Products selling</li>
              <li>Target segents</li>
              <li>Target profile</li>
            </ul>
          </div>
          <div className={styles.needHelpFooter}>
            Need help? Connect with support
          </div>
        </div>
      </div>
    </>
  );
}

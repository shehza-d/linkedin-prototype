import styles from "../../styles/AuthBase.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImg from "../../assets/Rectangle-7126.png";
import Login from "./Login";
import logoWhite from "../../assets/logoWhite.svg";
import logoBlue from "../../assets/logoBlue.svg";
import Signup from "./Signup";
export default function AuthBase() {
  return (
    <div className={`${styles.authScreen}`}>
      <ToastContainer />
      <div>
        <img src={logoWhite} className={styles.logoWhite} alt="" />
        <p className={styles.heading}>
          Advanced Search-Find your smartest way to the buyer.
        </p>
        <span className={styles.subHeading}>Start your company in minutes</span>
      </div>
      <div className={styles.authSection}>
        <Login />
        {/* <Signup/> */}
      </div>
      <img src={logoBlue} className={styles.logoBlue} alt="" />
    </div>
  );
}

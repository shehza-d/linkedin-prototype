import styles from "../../styles/authPage/AuthBase.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import bgImg from "../../assets/authPage/Rectangle-7126.png";
import logoWhite from "../../assets/authPage/logoWhite.svg";
import logoBlue from "../../assets/authPage/logoBlue.svg";
import Login from "./Login";
import Signup from "./Signup";
export default function AuthBase() {
 const [loginOrSignup,setLoginOrSignup]=useState(null);

  return (
    <div className={styles.container}>
      <div className={`${styles.authScreen}`}>
        {/* <ToastContainer /> */}
        <img src={logoWhite} className={styles.logoWhite} alt="" />
        <div className={styles.leftContainer}>
          <p className={styles.heading}>
            Advanced Search-Find your smartest way to the buyer.
          </p>
          <span className={styles.subHeading}>Start your company in minutes</span>
        </div>
        <div className={styles.authSection}>
          {true  ? 
           <Login loginOrSignup={loginOrSignup}/> 
          : <Signup loginOrSignup={loginOrSignup}/> 
          }
        </div>
        <img src={logoBlue} className={styles.logoBlue} alt="" />
      </div>
    </div>

  );
}

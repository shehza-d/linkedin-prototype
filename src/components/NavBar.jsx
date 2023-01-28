import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo22.svg";
import bell from "../assets/bell.svg";
import userImg from "../assets/userImg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavBar() {
  const logoutFun = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
      toast(`An error occurred while Logging Out`);
    }
  };
  return (
    <>
      <ToastContainer />
      <nav className={styles.nav}>
        <img src={logo} className={styles.logo} alt="" />
        <div className={styles.right}>
          <button onClick={logoutFun}>Log Out</button>
          <img src={bell} alt="" />
          <img src={userImg} alt="" className={styles.userImg} />
        </div>
      </nav>
    </>
  );
}

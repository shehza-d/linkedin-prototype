import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo22.svg";
import bell from "../assets/bell.svg";
import userImg from "../assets/userImg.png";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} className={styles.logo} alt="" />
      <div className={styles.right}>
        <img src={bell} alt="" /> 
        <img src={userImg} alt="" className={styles.userImg}   />
      </div>
    </nav>
  );
}

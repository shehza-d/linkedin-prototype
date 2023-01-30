import styles from "../styles/SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <>
      <div className={styles.inputContainer}>
        <FiSearch />
        <input type="search" name="" placeholder="Search Industries" id="" className={styles.input} />
      </div>
    </>
  );
}

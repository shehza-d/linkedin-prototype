import styles from "../styles/dashboard/screen3.module.css";
// import styles from "../../styles/dashboard/screen3.module.css";
import searchIcon from "../assets/dashboard/search.svg";

export default function ExecutiveSearchBar({state}){
    return (<>
     <div className={styles.rightSection}>
        <div>
          <button className={styles.btn2} onClick={() => state(true)}>Company</button>
          <button className={styles.btn1} onClick={() => state(false)}>Executive</button>
        </div>

        <div className={styles.formOptions}>
          <p>Target Executive Profile</p>
          <button>Clear</button>
        </div>

        <div className={styles.searchBarDiv2}>
          <img src={searchIcon} alt="" />
          <input type="search" placeholder="Search industries" />
        </div>

        <div className={styles.allBtns}>
          <button className={`${styles.btn} ${styles.blueBtn}`}>
            Business Executives
          </button>
          <button className={`${styles.btn} ${styles.whiteBtn}`}>
            Human Resources
          </button>
        </div>
        <div className={styles.formOptions}>
          <p>Alumni of </p>
          <button>Clear</button>
        </div>
        <div className={styles.searchBarDiv2}>
          <img src={searchIcon} alt="" />
          <input type="search" placeholder="Search industries" />
        </div>
        <div className={styles.formOptions}>
          <p>Industry</p>
          <button>Clear</button>
        </div>
        <div className={styles.searchBarDiv2}>
          <img src={searchIcon} alt="" />
          <input type="search" placeholder="Search industries" />
        </div>
      </div>

    </>)
}
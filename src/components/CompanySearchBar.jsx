import styles from "../styles/dashboard/allContent.module.css";
import rock from "../assets/dashboard/Rock.png";
import searchIcon from "../assets/dashboard/search.svg";
import { useState } from "react";

export default function CompanySearchBar({ state }) {
  const [searchh, setSearchh] = useState("");
  return (
    <div className={styles.rightCompanyContainer}>
      <div>
        <button className={styles.btn1} onClick={() => state(true)}>
          Company
        </button>
        <button className={styles.btn2} onClick={() => state(false)}>
          Executive
        </button>
      </div>

      <div className={styles.formOptions}>
        <p>Industry</p>
        <button>Clear</button>
      </div>

      <div className={styles.searchBarDiv2}>
        <img src={searchIcon} alt="" />
        <input
          type="search"
          value={searchh}
          onChange={(e) => setSearchh(e.target.value)}
          placeholder="Search industries"
        />
      </div>

      <div className={styles.allBtns}>
        <button
          className={`${styles.btn} ${styles.blueBtn}`}
          onClick={() => setSearchh("AeroSpace")}
        >
          AeroSpace
        </button>
        <button
          className={`${styles.btn} ${styles.blueBtn}`}
          onClick={() => setSearchh("Retail")}
        >
          Retail
        </button>
        <button
          className={`${styles.btn} ${styles.blueBtn}`}
          onClick={() => setSearchh("Media")}
        >
          Media
        </button>
        {/* <div
          className={styles.bgRockImg}
          style={{ backgroundImage: `url(${rock}` }}
        ></div> */}
        <button
          className={`${styles.btn} ${styles.blueBtn}`}
          onClick={() => setSearchh("Computer")}
        >
          Computer
        </button>
        <button
          className={`${styles.btn} ${styles.whiteBtn}`}
          onClick={() => setSearchh("Mobile")}
        >
          Mobile
        </button>
        <button
          className={`${styles.btn} ${styles.whiteBtn}`}
          onClick={() => setSearchh("Insurance")}
        >
          Insurance
        </button>
        <button
          className={`${styles.btn} ${styles.whiteBtn}`}
          onClick={() => setSearchh("Computer IT")}
        >
          Computer IT
        </button>
        <button
          className={`${styles.btn} ${styles.whiteBtn}`}
          onClick={() => setSearchh("Media ")}
        >
          Media
        </button>
        <button className={styles.btn} style={{ border: "none" }}>
          View all
        </button>
      </div>
      <div className={styles.formOptions}>
        <p>Revenue of a company</p>
        <button>Clear</button>
      </div>
      <input type="range" name="revenue" id="" />
      <div className={styles.formOptions}>
        <p>Employee</p>
        <button>Clear</button>
      </div>
      <input type="range" name="employeeCount" id="" />
    </div>
  );
}

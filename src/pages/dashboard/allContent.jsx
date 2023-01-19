import styles from "../../styles/dashboard/allContent.module.css";
import SearchSuggestion from "./searchSuggestionBox";
import SearchCard from "./searchCard";
import earth from "../../assets/dashboard/earth.png";
import huawei from "../../assets/dashboard/huawei.png";
import mail from "../../assets/dashboard/mail.png";
import samsung from "../../assets/dashboard/samsung.png";
// import earth from '../../assets/dashboard'
import rock from "../../assets/dashboard/Rock.png";
import searchIcon from "../../assets/dashboard/search.svg";

const dataObj = [
  {
    img: earth,
    logo: huawei,
    heading: "Huawei",
    text: "Huawei Technologies Co., Ltd. is a Chinese multinational technology corporation headquartered in Shenzhen, Guangdong, China. It designs, develops, produces and sells telecommunications equipment, consumer electronics and various smart devices.",
    number: "03994033044",
    address: "Huawei Base, Bantian,...",
  },
  {
    img: mail,
    logo: samsung,
    heading: "Samsung",
    text: `Samsung Electronics Co., Ltd. is a South Korean multinational electronics corporation headquartered in Yeongtong-gu, Suwon, South Korea. It is the pinnacle of the Samsung chaebol, accounting for 70% of the group's revenue in 2012`,
    number: "03994033044",
    address: "Huawei Base, Bantian,...",
  },
];

export default function AllContent() {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.cardContainer}>
        {dataObj?.map((eachData, i) => (
          <SearchCard
            key={i}
            heading={eachData?.heading}
            text={eachData?.text}
            img={eachData?.img}
            logo={eachData?.logo}
            phoneNumber={eachData?.number}
            address={eachData?.address}
            // postDate={eachData?.createdOn}
          />
        ))}
        {/* <SearchCard /> */}
        <SearchSuggestion />
        {/* to remove */}
        <p></p>
        <br />
        <p></p>
        <br />
        <p></p>
        <br />
        {/* to remove */}
      </div>

      <div className={styles.rightCompanyContainer}>
        <div>
          <button className={styles.btn1}>Company</button>
          <button className={styles.btn2}>Executive</button>
        </div>

        <div className={styles.formOptions}>
          <p>Industry</p>
          <button>Clear</button>
        </div>

        <div className={styles.searchBarDiv2}>
          <img src={searchIcon} alt="" />
          <input type="search" placeholder="Search industries" />
        </div>

        <div className={styles.allBtns}>
          <button className={`${styles.btn} ${styles.blueBtn}`}>
            AeroSpace
          </button>
          <button className={`${styles.btn} ${styles.blueBtn}`}>Retail</button>
          <button className={`${styles.btn} ${styles.blueBtn}`}>Media</button>
          <div
            className={styles.bgRockImg}
            style={{ backgroundImage: `url(${rock}` }}
          >
            s
          </div>
          <button className={`${styles.btn} ${styles.blueBtn}`}>
            Computer
          </button>
          <button className={`${styles.btn} ${styles.whiteBtn}`}>Mobile</button>
          <button className={`${styles.btn} ${styles.whiteBtn}`}>
            Insurance
          </button>
          <button className={`${styles.btn} ${styles.whiteBtn}`}>
            Computer IT
          </button>
          <button className={`${styles.btn} ${styles.whiteBtn}`}>Media</button>
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
    </div>
  );
}

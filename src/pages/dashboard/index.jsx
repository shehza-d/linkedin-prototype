import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import styles from "../../styles/dashboard/index.module.css";
import { RiHome5Line } from "react-icons/ri";
import searchIcon from "../../assets/dashboard/search.svg";
import SearchCard from "./searchCard";
import earth from "../../assets/dashboard/earth.png";
import huawei from "../../assets/dashboard/huawei.png";
import mail from "../../assets/dashboard/mail.png";
import samsung from "../../assets/dashboard/samsung.png";
// import earth from '../../assets/dashboard'
import rock from "../../assets/dashboard/Rock.png";
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

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className={styles.homeBtnDiv}>
        <div className={styles.homeCircle}>
          <RiHome5Line />
        </div>
        <span className={styles.options}>Home</span>
      </div>

      <div className={styles.searchBarDiv}>
        <img src={searchIcon} alt="" />
        <input type="search" placeholder="Search" />
      </div>

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
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </>
  );
}

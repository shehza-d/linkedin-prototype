import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import styles from "../../styles/dashboard/index.module.css";
import { RiHome5Line } from "react-icons/ri";
import searchIcon from "../../assets/dashboard/search.svg";
// import SearchCard from "./searchCard";
// import SearchSuggestion from "./searchSuggestionBox";
import AllContent from "./allContent";
import CompanyDetails from "./companyDetails";

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
      <AllContent />
      {/* <CompanyDetails /> */}
    </>
  );
}

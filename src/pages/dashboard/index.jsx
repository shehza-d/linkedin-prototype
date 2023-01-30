// import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import styles from "../../styles/dashboard/index.module.css";
import { RiHome5Line } from "react-icons/ri";
import searchIcon from "../../assets/dashboard/search.svg";
// import SearchCard from "./searchCard";
// import SearchSuggestion from "./searchSuggestionBox";
import AllContent from "./allContent";
// import CompanyDetails from "./companyDetails";
// import EmployeeSearch from "./EmployeeSearch";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";
import { db } from "../../firebase.js";
import {
  getFirestore,
  collection, //get reference to a collection
  addDoc,
  getDocs, //get all docs
  getDoc, //get one doc
  doc, //get reference to a document
  onSnapshot,
  query,
  where,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";

export default function Dashboard() {
  const { state, dispatch } = useContext(GlobalContext);
  const [counter, setCounter] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataArr, setDataArr] = useState([]);

 
      // useEffect(() => {
  //   (async () => {
  //     let tempArr = [];
  //     const q = query(
  //       collection(db, "companies"),
  //       where("name", "==", searchQuery),
  //       //   orderBy("createdOn", "desc"),
  //       limit(60)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       tempArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     // console.log(tempArr);
  //     // setDataArr(tempArr);
  //     dispatch({
  //       type: "SET_CompanySearchQueryData",
  //       payload: tempArr,
  //     });
  //   })();
  // }, [searchQuery]);
  useEffect(() => {
    (async () => {
      let tempArr = [];
      const querySnapshot = await getDocs(collection(db, "companies"));
      querySnapshot.forEach((doc) => {
        tempArr.push({ ...doc.data(), id: doc.id });
      });
      // console.log(tempArr);
      dispatch({
        type: "SET_CompanySearchQueryData",
        payload: tempArr,
      });
    })();
  }, []);
  // console.log(dataArr);
  // console.log(state);

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
        <input
          type="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
      </div>

      {/* {counter === 1 ? ( */}
      <AllContent setCounter={setCounter} searchQuery={searchQuery}/>
      {/* ) : null} */}
      {counter === 2 ? (
        <div>no data</div>
      ) : // <CompanyDetails setCounter={setCounter} searchQuery={searchQuery} />
      null}
      {/* {counter === 3 ? <Screen3 setCounter={setCounter} /> : null} */}
    </>
  );
}

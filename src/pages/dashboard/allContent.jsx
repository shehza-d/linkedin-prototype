import styles from "../../styles/dashboard/allContent.module.css";
// import SearchSuggestion from "./searchSuggestionBox";
import SearchCard from "./searchCard";
import earth from "../../assets/dashboard/earth.png";
import huawei from "../../assets/dashboard/huawei.png";
import mail from "../../assets/dashboard/mail.png";
import samsung from "../../assets/dashboard/samsung.png";
// import earth from '../../assets/dashboard'
import React, { useState, useEffect } from "react";
import CompanySearchBar from "../../components/CompanySearchBar";
import ExecutiveSearchBar from "../../components/ExecutiveSearchBar";
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

export default function AllContent({ setCounter, searchQuery }) {
  const [companyExecutiveState, setCompanyExecutiveState] = useState(true);
  const [dataArr, setDataArr] = useState([]);
  const [matches, setMatches] = useState(
    // window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  // let mediaQuery = window.matchMedia('(max-width: 768px)').matches
  // console.log(matches);

  useEffect(() => {
    (async () => {
      let tempArr = [];
      const q = query(
        collection(db, "companies"),
        where("name", "==", searchQuery),
        //   orderBy("createdOn", "desc"),
        limit(60)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        tempArr.push({ ...doc.data(), id: doc.id });
      });
      setDataArr(tempArr);
    })();
  }, [searchQuery]);

  console.log(dataArr);

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.cardContainer}>
        {dataArr?.map((eachData, i) => (
          <SearchCard
            key={i}
            setCounter={setCounter}
            heading={eachData?.name}
            text={eachData?.details}
            img={eachData?.img}
            logo={eachData?.logoURL}
            phoneNumber={eachData?.contactNumber}
            address={eachData?.address}
            // postDate={eachData?.createdOn}
          />
        ))}
        {/* <SearchCard /> */}
        {/* {matches ? <SearchSuggestion /> : null} */}
        {/* to remove */}
        <p></p>
        <br />
        <p></p>
        <br />
        <p></p>
        <br />
        {/* to remove */}
      </div>
      {companyExecutiveState ? (
        <CompanySearchBar state={setCompanyExecutiveState} />
      ) : (
        <ExecutiveSearchBar state={setCompanyExecutiveState} />
      )}
    </div>
  );
}

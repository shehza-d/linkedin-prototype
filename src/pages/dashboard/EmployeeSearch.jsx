import styles from "../../styles/dashboard/screen3.module.css";
import styles2 from "../../styles/dashboard/index.module.css";
// import photo1 from "../../assets/dashboard/userFace1.png";
// import photo2 from "../../assets/dashboard/userFace2.png";
// import photo3 from "../../assets/dashboard/userFace3.png";
// import photo4 from "../../assets/dashboard/userFace4.png";
import star from "../../assets/dashboard/Star.svg";
// import mail from "../../assets/dashboard/mail.svg";
// import phone from "../../assets/dashboard/phone2.svg";
// import searchIcon from "../../assets/dashboard/search.svg";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
import { useNavigate } from "react-router-dom";
import ExecutiveSearchBar from "../../components/ExecutiveSearchBar";
import CompanySearchBar from "../../components/CompanySearchBar";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";
// import { RiHome5Line } from "react-icons/ri";
import searchIcon from "../../assets/dashboard/search.svg";
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
  startAt,
} from "firebase/firestore";
import NavBar from "../../components/NavBar";

function Users(props) {
  const { profilePhoto, userName, rank, company, text, number, email } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.user} onClick={() => navigate("/employees")}>
      <div className={styles.userDiv1}>
        <img src={profilePhoto} alt="" width={52} height={52} />
        <div className={styles.userDiv2}>
          <p className={styles.userTitle}>{userName}</p>
          <p className={styles.userRank}>{rank}</p>
          <p className={styles.userCompany}>@ {company}</p>
        </div>
        <div>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
      <p className={styles.para}>{text}</p>
      <div className={styles.userDiv3}>
        <span>{number}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default function EmployeeSearch() {
  const { state, dispatch } = useContext(GlobalContext);
  const [companyExecutiveState, setCompanyExecutiveState] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryData, setSearchQueryData] = useState(null);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     let tempArr = [];
  //     const q = query(
  //       collection(db, "employees"),
  //       where("name", "==", searchQuery),
  //       // startAt(searchQuery),
  //       //   orderBy("createdOn", "desc"),
  //       limit(60)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       tempArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     // console.log(tempArr);
  //     setData(tempArr);
  //     // dispatch({
  //     //   type: "SET_CoSearchQueryData",
  //     //   payload: tempArr,
  //     // });
  //   })();
  // }, [searchQuery]);

  let tempArr = [];
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "employees"));
      querySnapshot.forEach((doc) => {
        tempArr.push({ ...doc.data(), id: doc.id });
      });
      setData(tempArr);
    })();
  }, [refresh]);

  // if (searchQuery.length === 0) {
  //   setRefresh(true);
  // }
  useEffect(() => {
    const quiredData = data.filter((i) => i.name === searchQuery);
    if (quiredData.length > 0) {
      setData(quiredData);
    } else {
      setData(tempArr);
    }
  }, [searchQuery]);
  console.log("tempArrt ", tempArr);
  console.log("data ", data);

  return (
    <>
      <NavBar />
      <div className={styles2.searchBarDiv}>
        <img src={searchIcon} alt="" />
        <input
          type="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.leftUsersSection}>
          {data?.map((eachData, i) => (
            <Users
              key={i}
              userName={eachData?.name}
              profilePhoto={eachData?.profilePhoto}
              rank={eachData?.rank}
              company={eachData?.company}
              text={eachData?.text}
              number={eachData?.number}
              email={eachData?.email}
            />
          ))}
          {/*<Users /> */}
        </div>
        {companyExecutiveState ? (
          <CompanySearchBar state={setCompanyExecutiveState} />
        ) : (
          <ExecutiveSearchBar state={setCompanyExecutiveState} />
        )}
      </div>
    </>
  );
}

// const data = [
//   {
//     userName: "Maryam Tariq",
//     profilePhoto: photo1,
//     rank: "Chair and Chief Executive Officer",
//     company: "@ General Motors",
//     text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
//     number: "03994033044",
//     email: "Bboland@gmail.com",
//   },
//   {
//     userName: "Maryam Tariq",
//     profilePhoto: photo2,
//     rank: "Chair and Chief Executive Officer ",
//     company: "@ General Motors",
//     text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
//     number: "03994033044",
//     email: "Bboland@gmail.com",
//   },
//   {
//     userName: "Maryam Tariq",
//     profilePhoto: photo3,
//     rank: "Chair and Chief Executive Officer ",
//     company: "@ General Motors",
//     text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
//     number: "03994033044",
//     email: "Bboland@gmail.com",
//   },
//   {
//     userName: "Maryam Tariq",
//     profilePhoto: photo4,
//     rank: "Chair and Chief Executive Officer ",
//     company: "@ General Motors",
//     text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
//     number: "03994033044",
//     email: "Bboland@gmail.com",
//   },
// ];

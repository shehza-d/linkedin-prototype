import NavBar from "../../components/NavBar";
import styles from "../../styles/dashboard/EmployeeDetail.module.css";
import { RiHome5Line } from "react-icons/ri";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import userSearch from "../../assets/dashboard/userSearch.svg";
import arrow from "../../assets/dashboard/arrow.svg";
import linkedIn from "../../assets/dashboard/linkedIn.svg";
import userFace1 from "../../assets/dashboard/userFace1.png";
import userFace2 from "../../assets/dashboard/userFace2.png";
import userFace3 from "../../assets/dashboard/userFace3.png";
import userFace4 from "../../assets/dashboard/userFace4.png";
import userFace5 from "../../assets/dashboard/userFace5.png";
import userFace6 from "../../assets/dashboard/userFace6.png";
import userFace7 from "../../assets/dashboard/userFace7.png";
import userFace8 from "../../assets/dashboard/userFace8.png";

function UserProfile({
  profilePic,
  userName,
  userPosition,
  userNumber,
  buyer,
}) {
  return (
    <div className={styles.UserProfileContainer}>
      <img src={profilePic} width={90} height={90} alt="" />
      <div style={{ width: "55%" }}>
        <div className={styles.textt}>
          <Typography sx={{ fontWeight: "600" }}>{userName}</Typography>
          <Typography sx={{ fontWeight: "300" }}>{userPosition}</Typography>
        </div>
        <div className={styles.btnss}>
          <img src={linkedIn} alt="" />
          <div className={styles.num}>{userNumber}</div>
          <div style={{ width: "61px", height: "31px" }}>
            {buyer && <div className={styles.buyerStatus}>Buyer</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmployeeDetail() {
  return (
    <>
      <NavBar />
      <div className={styles.navigationContainer}>
        <div className={styles.homeBtnDiv}>
          <div className={styles.homeCircle}>
            <RiHome5Line />
          </div>
          <span className={styles.home}>Home</span>
        </div>
        <div className={styles.optionsDiv}>
          <img src={arrow} alt="" />
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <img src={userSearch} alt="" />
            <Typography variant="span" sx={{ pl: " 5px" }}>
              Executive Search
            </Typography>
          </div>
        </div>
      </div>

      <div className={styles.pageContainer}>
        <UserProfile
          userName="Maryam Tariq"
          profilePic={userFace1}
          userPosition="Chair and CEO"
          userNumber="9"
          buyer={true}
        />
        <UserProfile
          userName="Maryam Tariq"
          profilePic={userFace1}
          userPosition="Chair and CEO"
          userNumber="9"
        />
        <div className={styles.employeeContainer}>ssds</div>
      </div>
    </>
  );
}

import styles from "../../styles/dashboard/screen3.module.css";
import photo1 from "../../assets/dashboard/userFace1.png";
import photo2 from "../../assets/dashboard/userFace2.png";
import photo3 from "../../assets/dashboard/userFace3.png";
import photo4 from "../../assets/dashboard/userFace4.png";
import star from "../../assets/dashboard/Star.svg";
import mail from "../../assets/dashboard/mail.svg";
import phone from "../../assets/dashboard/phone2.svg"; 
import searchIcon from '../../assets/dashboard/search.svg'
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";
// import profilePhoto from "../../assets/dashboard/userFace1.png";

const dataObj = [
  {
    userName: "Maryam Tariq",
    profilePhoto: photo1,
    rank: "Chair and Chief Executive Officer ",
    company: "@ General Motors",
    text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
    number: "03994033044",
    email: "Bboland@gmail.com",
  },
  {
    userName: "Maryam Tariq",
    profilePhoto: photo2,
    rank: "Chair and Chief Executive Officer ",
    company: "@ General Motors",
    text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
    number: "03994033044",
    email: "Bboland@gmail.com",
  },
  {
    userName: "Maryam Tariq",
    profilePhoto: photo3,
    rank: "Chair and Chief Executive Officer ",
    company: "@ General Motors",
    text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
    number: "03994033044",
    email: "Bboland@gmail.com",
  },
  {
    userName: "Maryam Tariq",
    profilePhoto: photo4,
    rank: "Chair and Chief Executive Officer ",
    company: "@ General Motors",
    text: `Lorem ipsum dolor sit amet, consectetur adilit. Duis quam ex, maximus quis nisl ut, sollic, imperdiet lacus. Integer iaculis volutpat dapi,    tristique at augue.`,
    number: "03994033044",
    email: "Bboland@gmail.com",
  },
];

function Users({ profilePhoto, userName, rank, company, text, number, email }) {
  return (
    <div className={styles.user}>
      <div className={styles.userDiv1}>
        <img src={profilePhoto} alt="" width={52} height={52} />
        <div className={styles.userDiv2}>
          <p className={styles.userTitle}>{userName}</p>
          <p className={styles.userRank}>{rank}</p>
          <p className={styles.userCompany}>{company}</p>
        </div>
        <img src={star} alt="" />
      </div>
      <p className={styles.para}>{text}</p>
      <div className={styles.userDiv3}>
        <span>{number}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default function Screen3() {
  return (
    <div className={styles.container}>
      <div className={styles.leftUsersSection}>
        {dataObj?.map((eachData, i) => (
          <Users
            key={i}
            userName={eachData?.userName}
            profilePhoto={eachData?.profilePhoto}
            rank={eachData?.rank}
            company={eachData?.company}
            text={eachData?.text}
            number={eachData?.number}
            email={eachData?.email}
          />
        ))}
        <Users />
        <Users />
        {/*<Users /> */}
      </div>

      <div className={styles.rightSection}>
        <div>
          <button className={styles.btn2}>Company</button>
          <button className={styles.btn1}>Executive</button>
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
    </div>
  );
}

import styles from "../styles/dashboard/allContent.module.css";
// import rock from "../assets/dashboard/Rock.png";
import searchIcon from "../assets/dashboard/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import TagBtn from "./tagBtn";
import TagsModal from "./TagsModal";
import IndustryBtn from "./industryBtn.jsx";

export default function CompanySearchBar({ state }) {
  const [searchh, setSearchh] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  //MUI modal Open close
  const [isOpen, setIsOpen] = useState(false);

  // const handleTagsInputs = (e) => {///
  //   e.preventDefault();
  //   const { value, checked } = e.target;
  //   console.log(`${value} is ${checked}`);
  //   if (checked) {
  //     setTags([...tags, value]);
  //   } else {
  //     setTags(tags.filter((e) => e !== value));
  //   }
  //   console.log(e);
  // };
  console.log(tags);
  return (
    <div className={styles.rightCompanyContainer}>
      <TagsModal setTags={setTags} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>
        <button
          className={styles.btn1}
          onClick={() => {
            state(true);
            navigate("/dashboard");
          }}
        >
          Company
        </button>
        <button
          className={styles.btn2}
          onClick={() => {
            navigate("/employees");
            state(false);
          }}
        >
          Executive
        </button>
      </div>

      <div className={styles.formOptions}>
        <p>Industry</p>
        <button onClick={() => setSearchh("")}>Clear</button>
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
        <IndustryBtn
          label="aeroSpace"
          setSearchh={setSearchh}
          setTags={setTags}
        />
        <IndustryBtn label="retail" setSearchh={setSearchh} setTags={setTags} />
        <IndustryBtn label="media" setSearchh={setSearchh} setTags={setTags} />
        {/* <div
          className={styles.bgRockImg}
          style={{ backgroundImage: `url(${rock}` }}
        ></div> */}
        <IndustryBtn
          label="computer"
          setSearchh={setSearchh}
          setTags={setTags}
        />
        <IndustryBtn label="mobile" setSearchh={setSearchh} setTags={setTags} />
        <IndustryBtn
          label="insurance"
          setSearchh={setSearchh}
          setTags={setTags}
        />
        <IndustryBtn
          label="computer IT"
          setSearchh={setSearchh}
          setTags={setTags}
        />
        <IndustryBtn label="media" setSearchh={setSearchh} setTags={setTags} />

        <button
          className={styles.btn}
          style={{ border: "none" }}
          onClick={() => setIsOpen(!isOpen)}
        >
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

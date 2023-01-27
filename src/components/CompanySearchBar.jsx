import styles from "../styles/dashboard/allContent.module.css";
import rock from "../assets/dashboard/Rock.png";
import searchIcon from "../assets/dashboard/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius:"20px",
  boxShadow: 24,
  p: 4,
};

export default function CompanySearchBar({ state }) {
  const [searchh, setSearchh] = useState("");
  const navigate = useNavigate();
  //MUI
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => setOpen(!open);

  return (
    <div className={styles.rightCompanyContainer}>
      <Modal
        open={open}
        onClose={handleOpenClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Industry     
          </Typography>
         <input type="text" />

        <Box>

<h1>dfhdf</h1>


        </Box>
        </Box>
      </Modal>
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
        <button
          className={styles.btn}
          style={{ border: "none" }}
          onClick={handleOpenClose}
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

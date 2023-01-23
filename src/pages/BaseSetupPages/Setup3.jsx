import { useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";
import styles from "../../styles/BasePages/setup2.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import enterArrow from "../../assets/basePages/enterArrow.svg";
import DropDown from "../../components/muiDropDown";
import { useNavigate } from "react-router-dom";

export default function Setup3() {
  let { state, dispatch } = useContext(GlobalContext);
  const [industryValue, setIndustryValue] = useState("");
  const [revenueSizeValue, setRevenueSizeValue] = useState("");
  const [employeeValue, setEmployeeValue] = useState("");
  const [geographyValue, setGeographyValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              {
                type: "SETUP_FORM_DATA",
                payload: {
                  ...state.setupFormData,
                  industry: industryValue,
                  revenueSize: revenueSizeValue,
                  employee: employeeValue,
                  geography: geographyValue,
                  // product: inputValue,
                },
              },
              {
                type: "COUNTER",
                payload: ++state.setupScreenCounter,
              }
            );
          }}
        >
          <div className={styles.form}>
            <Typography>Define your target market segments?</Typography>

            <div className={styles.flex}>
              <DropDown label="Industry" />
              <DropDown label="Revenue Size" />
            </div>
            <div className={styles.flex}>
              <DropDown label="Employee" />
              <DropDown label="Geography" />
            </div>

            <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
              Define your target profile?
            </Typography>

            <div className={styles.flex}>
              <DropDown label="Role of person" disable={true} />
              <DropDown label="Designation" disable={true} />
            </div>
            <div className={styles.flex}>
              <DropDown
                label="Span of control"
                disable={true}
                // sx={{display:{sm:"none"}}}
              />
              <DropDown label="Decision Maker" disable={true} />
            </div>
          </div>
          {/* <div className={styles.alignn}> */}
          <div className={styles.btn}>
            <Button
              variant="contained"
              size="large"
              sx={{ pl: 6, pr: 6, mr: 1 }}
              // onClick={() =>
              onClick={() => {
                dispatch({
                  type: "COUNTER",
                  payload: ++state.setupScreenCounter,
                });
              }}
            >
              Continue
            </Button>
            <div className={styles.pressEnter}>
              or&nbsp;&nbsp;press enter&nbsp;&nbsp;
              <img src={enterArrow} alt="" />
            </div>
          </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
}

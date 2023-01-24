import { useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";
import styles from "../../styles/BasePages/setup2.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import enterArrow from "../../assets/basePages/enterArrow.svg";
import DropDown from "../../components/muiDropDown";
// import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Setup3() {
  let { state, dispatch } = useContext(GlobalContext);
  const [industryValue, setIndustryValue] = useState("");
  const [revenueSizeValue, setRevenueSizeValue] = useState("");
  const [employeeValue, setEmployeeValue] = useState("");
  const [geographyValue, setGeographyValue] = useState("");
  // const navigate = useNavigate();

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
                  targetMarketSegments: {
                    industry: industryValue,
                    revenueSize: revenueSizeValue,
                    employee: employeeValue,
                    geography: geographyValue,
                  },
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
            <Typography>Define your target market segments? 3</Typography>

            <div className={styles.flex}>
              <DropDown
                options={[
                  { label: "IT Services" },
                  { label: "Education" },
                  { label: "Food" },
                  { label: "Construction" },
                ]}
                freeSolo
                setState={setIndustryValue}
                label="Industry"
              />
              <DropDown
                options={[
                  { label: "10K-50K" },
                  { label: "50K-100K" },
                  { label: "100K-300K" },
                  { label: "300K-1M" },
                  { label: "1M-3M" },
                ]}
                freeSolo
                setState={setRevenueSizeValue}
                label="Industry"
              />
            </div>
            <div className={styles.flex}>
              <DropDown
                options={[
                  { label: "5-50" },
                  { label: "50-100" },
                  { label: "100-500" },
                  { label: "500-3000" },
                ]}
                freeSolo
                setState={setEmployeeValue}
                label="Employee"
              />

              <DropDown
                options={[
                  { label: "Option 1" },
                  { label: "Option 2" },
                  { label: "Option 3" },
                  { label: "Option 4" },
                ]}
                freeSolo
                setState={setGeographyValue}
                label="Geography"
              />
            </div>

            <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
              Define your target profile?
            </Typography>

            <div className={styles.flex}>
              <DropDown label="Role of person" disable={true} />
              <DropDown label="Designation" disable={true} />
            </div>
            <div className={styles.flex}>
              <DropDown label="Span of control" disable={true} />
              <DropDown label="Decision Maker" disable={true} />
            </div>
          </div>
          {/* <div className={styles.alignn}> */}
          <div className={styles.btn}>
            <Button
              variant="contained"
              size="large"
              sx={{ pl: 6, pr: 6, mr: 1 }}
              type="submit"
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

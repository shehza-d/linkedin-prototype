import styles from "../../styles/BasePages/setup2.module.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import enterArrow from "../../assets/basePages/enterArrow.svg";

export default function Setup2() {
  let { state, dispatch } = useContext(GlobalContext);

  const dropdownOptions = [
    { label: "Option one" },
    { label: "Option two" },
    { label: "Option three" },
    { label: "Option four" },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <Typography>
            What kind of products is your company selling?
          </Typography>
          <Autocomplete
            sx={{ bgcolor: "#ffffffda", mb: 2, width: 275 }}
            disablePortal
            id=""
            options={dropdownOptions}
            renderInput={(params) => (
              <TextField {...params} label="Sale Product" />
            )}
          />

          <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
            Define your target market segments?
          </Typography>
          <div className={styles.flex}>
            <Autocomplete
              sx={{ bgcolor: "#ffffffda", mb: 2, width: "180px" }}
              // sx={{ width: "180px", mr: 1, mb: 1 }}
              disablePortal
              id=""
              options={dropdownOptions}
              renderInput={(params) => (
                <TextField {...params} label="Industry" />
              )}
              size="small"
            />

            <Autocomplete
              sx={{ bgcolor: "#ffffffda", mb: 2, width: "180px" }}
              disablePortal
              id=""
              options={dropdownOptions}
              renderInput={(params) => (
                <TextField {...params} label="Revenue Size" />
              )}
              size="small"
            />
          </div>
          <div className={styles.flex}>
            <Autocomplete
              sx={{ bgcolor: "#ffffffda", mb: 2, width: "180px" }}
              // sx={{ width: "180px", mr: 1 }}
              disablePortal
              id=""
              disabled
              options={dropdownOptions}
              renderInput={(params) => (
                <TextField {...params} label="Employee" />
              )}
              size="small"
            />
            <Autocomplete
              sx={{ bgcolor: "#ffffffda", width: "180px" }}
              disablePortal
              id=""
              options={dropdownOptions}
              disabled
              renderInput={(params) => (
                <TextField {...params} label="Geography" />
              )}
              size="small"
            />
          </div>
        </div>
        {/* <div className={styles.alignn}> */}
        <div className={styles.btn}>
          <Button
            variant="contained"
            size="large"
            sx={{ pl: 6, pr: 6, mr: 1, mt: { xs: 2 } }}
            onClick={() => {
            state.setupScreenCounter++;
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
      </div>
    </>
  );
}

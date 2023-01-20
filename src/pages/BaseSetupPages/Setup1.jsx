import styles from "../../styles/BasePages/setup1.module.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import enterArrow from "../../assets/basePages/enterArrow.svg";
export default function Setup1() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div>
          <Typography>What's your role in the company?</Typography>
          <TextField
            id="filled-basic"
            label="Enter Your Role"
            variant="filled"
            size="small"
            sx={{ bgcolor: "#ffffffda", mb: 2 }}
          />
          <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
            What kind of products is your company selling?
          </Typography>
          <TextField
            id="filled-basic"
            label="Start typing the name....."
            variant="filled"
            disabled
            sx={{ bgcolor: "#ffffffda", color: "red", mb: 2 }}
          />
        </div>
        <div>
          <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
            Define your target market segments?
          </Typography>
          <div className={styles.formOption1}>
            <TextField
              id="filled-basic"
              label="Role of person"
              variant="filled"
              size="small"
              disabled
              sx={{ width: "180px", mr: 1, mb: { md: 1 } }}
            />
            <TextField
              id="filled-basic"
              label="Designation"
              variant="filled"
              size="small"
              disabled
              sx={{ width: "180px" }}
            />
          </div>
          <div className={styles.formOption1}>
            <TextField
              id="filled-basic"
              label="Span of control"
              variant="filled"
              size="small"
              disabled
              sx={{ width: "180px", mr: 1 }}
            />
            <TextField
              id="filled-basic"
              label="Decision maker"
              variant="filled"
              size="small"
              disabled
              sx={{ width: "180px" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <Button
          variant="contained"
          size="large"
          sx={{ pl: 6, pr: 6, mr: 1, mt: { xs: 2 } }}
        >
          Continue
        </Button>
        <div className={styles.pressEnter}>
          or&nbsp;&nbsp;press enter&nbsp;&nbsp;
          <img src={enterArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

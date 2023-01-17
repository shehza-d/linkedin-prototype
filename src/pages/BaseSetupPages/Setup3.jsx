import Typography from "@mui/material/Typography";
import styles from "../../styles/BasePages/setup2.module.css";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import enterArrow from "../../assets/basePages/enterArrow.svg";
import DropDown from "../../components/muiDropDown";

export default function Setup2() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <Typography>
            Define your target market segments?           
          </Typography>

          <div style={{ display: "flex" }}>
            <DropDown label="Industry" />
            <DropDown label="Revenue Size" />
          </div>
          <div style={{ display: "flex" }}>
            <DropDown label="Employee" />
            <DropDown label="Geography" />
          </div>

          <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
            Define your target profile?
          </Typography>

          <div style={{ display: "flex" }}>
            <DropDown label="Role of person" />
            <DropDown label="Designation" />
          </div>
          <div style={{ display: "flex" }}>
            <DropDown label="Span of control" />
            <DropDown label="Decision Maker" />
          </div>
        </div>
        {/* <div className={styles.alignn}> */}
        <div className={styles.btn}>
          <Button variant="contained" size="large" sx={{ pl: 6, pr: 6, mr: 1 }}>
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

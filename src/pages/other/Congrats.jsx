import styles from "../../styles/congrats.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logoWhite from "../../assets/authPage/logoWhite.svg";
import ellipse from "../../assets/congratsPage-Ellipse.png";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";

export default function Congrats() {
  let { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  console.log(state.setupFormData);
  return (
    <div className={styles.container}>
      <img src={logoWhite} className={styles.logoWhite} alt="" />
      <img src={ellipse} className={styles.ellipse} alt="" />

      <div className={styles.card}>
        <Typography
          variant="h2"
          sx={{
            color: "#1A5CB0",
            fontWeight: "600",
            fontSize: { xs: 34, md: 64 },
            pb: { xs: 2 },
          }}
        >
          Congratulations!
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "300",
            color: "#1A5CB0",
            fontSize: "28px",
            lineHeight: "32px",
            ml: 1,
          }}
        >
          Your profile has been created!
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "300",
            color: "#1A5CB0",
            fontSize: "28px",
            lineHeight: "32px",
          }}
        >
          Click on continue to start
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1A5CB0",
            mt: { xs: "20px", md: "42px" },
            py: { xs: "10px", md: "15px" },
            px: { xs: "50px", md: "84px" },
            mb: { xs: "10px", md: 0 },
            textTransform: "none",
            fontWeight: "600",
          }}
          onClick={() => navigate("/dashboard")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

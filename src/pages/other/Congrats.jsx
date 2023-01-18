import styles from "../../styles/congrats.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logoWhite from "../../assets/authPage/logoWhite.svg";
import ellipse from "../../assets/congratsPage-Ellipse.png";
import { useNavigate } from "react-router-dom";

export default function Congrats() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={logoWhite} className={styles.logoWhite} alt="" />
      <img src={ellipse} className={styles.ellipse} alt="" />

      <div className={styles.card}>
        <Typography variant="h2" sx={{ color: "#1A5CB0", fontWeight: "600" }}>
          Congratulations!
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
            mt: "42px",
            py: "15px",
            px: "84px",
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

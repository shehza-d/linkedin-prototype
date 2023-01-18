import styles from "../../styles/welcome.module.css";
import aiSkull from "../../assets/welcome/aiSkull.png";
import logo1 from "../../assets/welcome/logo1.svg";
import logo2 from "../../assets/welcome/logo2.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={aiSkull} className={styles.aiSkull} alt="" />
      <img src={logo1} className={styles.logo1} alt="" />
      <div className={styles.card}>
        <img src={logo2} className={styles.logo2} alt="" />
        <Typography variant="h2" sx={{ color: "#1A5CB0", fontWeight: "600" }}>
          Welcome to Product
        </Typography>
        <Typography
          variant="p"
          sx={{ fontWeight: "300", fontSize: "28px", lineHeight: "32px" }}
        >
          Artificial Intelligence For Your Marketing Needs
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1A5CB0",
            mt: "72px",
            py: "10px",
            px: "24px",
          }}
          endIcon={<AiOutlineArrowRight />}
          onClick={() => navigate("/setup")}
        >
          Let's Get Started
        </Button>
      </div>
    </div>
  );
}

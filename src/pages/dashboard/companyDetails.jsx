import styles from "../../styles/dashboard/companyDetails.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CompanyDetails() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}></div>
    </Container>
  );
}

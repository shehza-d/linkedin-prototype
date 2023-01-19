import styles from "../../styles/dashboard/companyDetails.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function CompanyDetails() {
  return (
    <div style={{ display: "flex", margin: 0 }}>
      <Box
        sx={{
          width: "70%",
          height: 300,

          bgcolor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box sx={{}}>
          <img src="" alt="" />
          <Box sx={{}}></Box>
          <Box sx={{}}></Box>
        </Box>
        <Typography variant="p">
          Huawei Technologies Co., Ltd. is a Chinese multinational technology
          corporation headquartered in Shenzhen, Guangdong, China. It designs,
          develops, produces and sells telecommunications equipment, consumer
          electronics and various smart devices. Huawei has deployed its
          products and services in more than 170 countries and areas.[7] It
          overtook Ericsson in 2012 as the largest telecommunications equipment
          manufacturer in the world,[8] and overtook Apple in 2018 as the
          second-largest manufacturer of smartphones in the world, behind
          Samsung Electronics.[9] In 2018, Huawei reported annual revenue of
          US$108.5 billion.[10] In July 2020, Huawei surpassed Samsung and Apple
          in the number of phones shipped worldwide for the first time.[11] This
          was primarily due to a drop in Samsung's global sales in the second
          quarter of 2020, owing to the impact of the COVID-19 pandemic.
        </Typography>

        <Box sx={{}}></Box>
        <Box sx={{}}></Box>
      </Box>
      <Box
        sx={{
          width: "30%",
          height: "100vh",
          bgcolor: "secondary.dark",
          bgcolor: "#F7F7F7",
          boxShadow: "4px 4px 21px rgba(244, 244, 244, 0.19)",
          borderRadius: "20px 0px 0px 0",
          border: 1,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {" "}
      </Box>

      {/* <div className={styles.leftSection}></div> */}
      {/* <div className={styles.rightSection}></div> */}
    </div>
  );
}

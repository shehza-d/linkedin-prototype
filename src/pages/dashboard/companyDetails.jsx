import styles from "../../styles/dashboard/companyDetails.module.css";
// import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import huawei from "../../assets/dashboard/huawei.png";
import Rating from "@mui/material/Rating";
// import StarIcon from "@mui/icons-material/Star";
import { MdStarOutline } from "react-icons/md";
import phone from "../../assets/dashboard/phone.svg";
import map from "../../assets/dashboard/map-pin2.svg";
import NavBar from "../../components/NavBar";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";

export default function CompanyDetails({ setCounter, name, searchQuery }) {
  const { state, dispatch } = useContext(GlobalContext);
  let data = state?.companySearchQueryData[0];
  // console.log(state);
  return (
    <>
      {/* {
details
id
rating
} */}
      <NavBar />
      <div className={styles.flex}>
        <Box
          sx={{
            width: { xs: "92%", md: "70%" },
            p: { xs: "12px", md: 4, l: 8 },
            //   "&:hover": {
            //     backgroundColor: "primary.main",
            //     opacity: [0.9, 0.8, 0.7],
            //   },
          }}
        >
          <Box
            sx={{
              display: "flex",
              p: 2,
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {/* <img src= {huawei} alt="" /> */}
            <img src={data.logoURL} alt="" />
            <Box
              sx={{ pl: { xs: "8px", md: 4 }, pr: { xs: "4px", md: 1 } }}
              onClick={() => setCounter((prev) => prev + 1)}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 400, fontSize: "50px" }}
              >
                {data.name}
              </Typography>
              <span style={{ color: "#171717", textDecoration: "none" }}>
                www.{data.name}.com
              </span>
            </Box>
            <Rating
              value={3}
              name="read-only"
              readOnly
              size="large"
              sx={{ color: "#FFED4E" }}
              emptyIcon={<MdStarOutline style={{ opacity: 0 }} />}
            />
            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center !important",
                  width: 300,
                  mt: 1,
                }}
              >
                <img src={map} alt="" style={{ margin: "8px" }} />
                <Typography variant="span">{data.address}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center !important" }}>
                <img src={phone} alt="" style={{ margin: "8px" }} />
                <Typography variant="span">{data.contactNumber}</Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: "19px",
              lineHeight: "182%",
              letterSpacing: "0.01em",
              color: "#171717",
              mb: 3,
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            {data.details} {data.details} {data.details}
          </Typography>
          {/* rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              ORG Structure
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Financial Profile
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              News & Update
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Product & services
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Vendors & Partnerships
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Technology stack
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Contact center operations
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Back office
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Pain points & priorities
            </Grid>
            <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
              Pandora's box
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: { xs: "auto", md: "30%" },
            p: { xs: "12px", md: 4, l: 8 },
            bgcolor: "#F1F1F1",
            boxShadow: "4px 4px 21px rgba(244, 244, 244, 0.19)",
            borderRadius: "20px 0px 0px 0",
            // p: 4,
          }}
        >
          <Typography
            component="p"
            variant="h2"
            sx={{ fontSize: "30px", color: "#3C69A4" }}
          >
            Company overview
          </Typography>
          <div className={styles.textGroup}>
            <p className={styles.statsHeading}>Operates manufacturing plants</p>
            <p className={styles.stats}>Eight countries</p>
          </div>
          <div className={styles.textGroup}>
            <p className={styles.statsHeading}>Founded on</p>
            <p className={styles.stats}>September 15, 1987</p>
          </div>
          <div className={styles.textGroup}>
            <p className={styles.statsHeading}>Products and services</p>
            <p className={styles.stats}>20+</p>
          </div>

          <div className={styles.textGroup}>
            <p className={styles.statsHeading}>Employees</p>
            <p className={styles.stats}>5000+</p>
          </div>
          <div className={styles.textGroup}>
            <p className={styles.statsHeading}>Revenue</p>
            <p className={styles.stats}>¥636.8 billion (US$99.9 billion)</p>
          </div>
          <div className={styles.textGroup}>
            <p className={styles.statsHeading}>Stock price on today</p>
            <p className={styles.stats}>3.5900 (+2.57%)</p>
          </div>
        </Box>

        {/* <div className={styles.leftSection}></div> */}
        {/* <div className={styles.rightSection}></div> */}
      </div>
    </>
  );
}

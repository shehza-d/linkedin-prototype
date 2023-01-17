import styles from "../../styles/authPage/login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup
          .string("Enter your email")
          .email("Enter valid email")
          .required("Email is required")
          .min(3, "Please enter more then 3 characters ")
          .max(32, "Please enter within 32 characters "),
        password: yup
          .string("Enter your Password") //.password()
          .required("Password is required")
          .min(6, "Please enter more then 6 characters ")
          .max(64, "Please enter within 64 characters "),
      }),
      onSubmit: async (values) => {
        console.log(values);
        // try {
        //   const res = await axios.post(
        //     `${baseURI}/login`,
        //     {
        //       email: values.email,
        //       password: values.password,
        //     },
        //     { withCredentials: true }
        //   );
        //   console.log(res);
        //   toast(`${res.data.message}`); //https://www.npmjs.com/package/react-toastify
        //  } catch (err) {
        //   console.log(err);
        //   console.log(err.response.data.message);
        //   toast(`${err.response.data.message}`);
        // }
      },
    });
  return (
    <>
      <ToastContainer />
      {/* <div className={styles.container}> */}
      <Typography variant="h3" className={styles.title}>
        Welcome Back!
      </Typography>
      <Typography variant="p" className={styles.subtitle}>
        Sign In to your Account
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          sx={{
            backgroundColor: "#EFEFEF",
            marginBottom: "32px",
            marginTop: "52px",
          }}
          autoComplete="on"
          name="email"
          margin="dense"
          variant="outlined"
          type="email"
          // placeholder="Enter your email"
          id="email"
          label="Email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          sx={{ backgroundColor: "#EFEFEF" }}
          autoComplete="on"
          name="password"
          margin="dense"
          variant="outlined"
          type="password"
          // placeholder="Enter your password"
          id="password"
          label="Password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <div className={styles.formOption}>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#422D6F" }} />}
            label="Remember me"
          />
          {/* <Checkbox label="Remember" /> */}
          <a href="www.facebook.com">Forgot Password?</a>
        </div>
        <Button
          type="submit"
          className="submitBtn"
          sx={{ mb: "30px", py: "15px" }}
          variant="contained"
        >
          Sign In
        </Button>
        <Button
          variant="outlined"
          sx={{ mb: "23px", py: "15px" }}
          startIcon={<FcGoogle />}
        >
          Login with Google
        </Button>
      </form>

      <div className="">
        <span>Don't have an account? </span>
        <Link to="/signup" className="submitBtn">
          Sign-Up
        </Link>
      </div>
      {/* </div> */}
    </>
  );
}

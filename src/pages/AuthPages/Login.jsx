import styles from "../../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FcGoogle } from "react-icons/fc";
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
      {/* <div className={styles.container}> */}
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Welcome Back!</h2>
        <h5 className="subtitle">Sign In to your Account</h5>
        <TextField
          //  sx={{}}
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
        <div className="formOption">
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          {/* <Checkbox label="Remember" /> */}
          <a href="#">Forgot Password?</a>
        </div>
        <Button type="submit" className="submitBtn" variant="contained">
          SUBMIT
        </Button>
        <Button variant="outlined" startIcon={<FcGoogle />}>
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

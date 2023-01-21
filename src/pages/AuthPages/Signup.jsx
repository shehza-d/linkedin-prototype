import styles from "../../styles/authPage/signup.module.css";
// import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        userName: "",
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        userName: yup
          .string("Enter your name")
          .required("Name is required")
          .min(4, "Please enter more then 4 characters ")
          .max(15, "Please enter within 15 characters "),
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
        navigate("/welcome");
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
      <Typography
        variant="h3"
        sx={{ fontSize: "38px" }}
        className={styles.title}
      >
        Welcome to Product!
      </Typography>
      <Typography variant="p" className={styles.subtitle}>
        Let's get started!
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          sx={{
            backgroundColor: "#EFEFEF",
            marginBottom: "22px",
            marginTop: "42px",
            width: { xs: "320px", md: "420px" },
          }}
          autoComplete="on"
          name="userName"
          margin="dense"
          variant="outlined"
          type="text"
          // placeholder="Enter your email"
          id="userName"
          label="Name"
          value={values.userName}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.userName && Boolean(errors.userName)}
          helperText={touched.userName && errors.userName}
        />

        <TextField
          sx={{
            backgroundColor: "#EFEFEF",
            marginBottom: "22px",
            width: { xs: "320px", md: "420px" },
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
          sx={{
            backgroundColor: "#EFEFEF",
            width: { xs: "320px", md: "420px" },
          }}
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
          {/* <Checkbox label="Remember me" sx={{ color: "#422D6F" }} /> */}
          <FormControlLabel
            control={<Checkbox sx={{ color: "#422D6F" }} />}
            label="I agree to the"
          />
          <a href="www.facebook.com">Terms & Conditions</a>
        </div>
        <Button
          type="submit"
          className="submitBtn"
          sx={{ mb: "30px", py: "15px", width: { xs: "320px", md: "420px" } }}
          variant="contained"
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          sx={{ mb: "23px", py: "15px", width: { xs: "320px", md: "420px" } }}
          startIcon={<FcGoogle />}
        >
          Sign up with Google
        </Button>
      </form>

      <div className={styles.footer}>
        <span>Already have an account? </span>

        <button onClick={() => props.setLoginOrSignup(true)}>LogIn</button>
      </div>
      {/* </div> */}
    </>
  );
}

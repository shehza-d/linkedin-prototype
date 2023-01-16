import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import { useFormik } from "formik";
// import * as yup from "yup";

export default function Signup() {
  return (
    <>
      <ToastContainer />

      <p>si</p>
      <Link to="/login" className="submitBtn">
        LogIn
      </Link>
    </>
  );
}

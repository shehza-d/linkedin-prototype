import { useState, useContext } from "react";
import { GlobalContext } from "../../context/context.js";
import styles from "../../styles/BasePages/setup2.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import enterArrow from "../../assets/basePages/enterArrow.svg";
import { useNavigate } from "react-router-dom";
// My Custom Component to reduce/reuse code
import DropDown from "../../components/muiDropDown";

// Importing Firebase functions from the SDKs
import { db } from "../../firebase.js";
import {
  getFirestore,
  collection, //get reference to a collection
  addDoc,
  getDocs, //get all docs
  getDoc, //get one doc
  doc, //get reference to a document
  onSnapshot,
  query,
  where,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";

export default function Setup4() {
  let { state, dispatch } = useContext(GlobalContext);
  const [roleOfPersonValue, setRoleOfPersonValue] = useState("");
  const [designationValue, setDesignationValue] = useState("");
  const [spanOfControlValue, setSpanOfControlValue] = useState("");
  const [decisionMakerValue, setDecisionMakerValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              //sending data to Firebase
              const res = await addDoc(collection(db, "testing"), {
                userID: state.userID,
                ...state.setupFormData,
                targetProfile: {
                  roleOfPerson: roleOfPersonValue,
                  designation: designationValue,
                  spanOfControl: spanOfControlValue,
                  decisionMaker: decisionMakerValue,
                },
              });
              console.log(res);
              navigate("/congrats");
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <div className={styles.form}>
            <Typography>Define your target profile 4</Typography>

            <div className={styles.flex}>
              <DropDown
                options={[
                  { label: "Development" },
                  { label: "Designing" },
                  { label: "Management" },
                  { label: "Hiring" },
                ]}
                freeSolo
                setState={setRoleOfPersonValue}
                label="Role of person"
                size="large"
              />
              <Autocomplete
                sx={{ bgcolor: "#ffffffda", mb: 2, width: 180 }}
                disablePortal
                id=""
                options={[
                  { label: "CEO" },
                  { label: "Manager" },
                  { label: "HR" },
                  { label: "Senior" },
                  { label: "Lead" },
                  { label: "Intern" },
                ]}
                required
                // value={inputValue}
                freeSolo
                onChange={(e, val) => {
                  try {
                    if (val.label !== undefined) setDesignationValue(val.label);
                  } catch (err) {}
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(e) => setDesignationValue(e.target.value)}
                    label="Designation"
                  />
                )}
              />
            </div>
            <div className={styles.flex}>
              <Autocomplete
                sx={{ bgcolor: "#ffffffda", mb: 2, width: 180 }}
                disablePortal
                id=""
                options={[
                  { label: "Option 1" },
                  { label: "Option 2" },
                  { label: "Option 3" },
                  { label: "Option 4" },
                ]}
                required
                // value={inputValue}
                freeSolo
                onChange={(e, val) => {
                  try {
                    if (val.label !== undefined)
                      setSpanOfControlValue(val.label);
                  } catch (err) {}
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(e) => setSpanOfControlValue(e.target.value)}
                    label="Span of control"
                  />
                )}
              />
              <Autocomplete
                sx={{ bgcolor: "#ffffffda", mb: 2, width: 180 }}
                disablePortal
                id=""
                options={[
                  { label: "YES" },
                  { label: "No" },
                  { label: "Maybe" },
                ]}
                required
                // value={inputValue}
                freeSolo
                onChange={(e, val) => {
                  try {
                    if (val.label !== undefined)
                      setDecisionMakerValue(val.label);
                  } catch (err) {}
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(e) => setDecisionMakerValue(e.target.value)}
                    label="Decision maker"
                  />
                )}
              />
            </div>

            <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
              Define your target profile?
            </Typography>

            <div className={styles.flex}>
              <DropDown label="Geography" disable={true} />
              <DropDown label="Year's in company" disable={true} />
            </div>
            <div className={styles.flex}>
              <DropDown
                label="Span of control"
                disable={true}
                // sx={{display:{sm:"none"}}}
              />
            </div>
          </div>
          {/* <div className={styles.alignn}> */}
          <div className={styles.btn}>
            <Button
              variant="contained"
              size="large"
              sx={{ pl: 6, pr: 6, mr: 1 }}
              type="submit"
              // onClick={() =>
              // onClick={async () => {
              // await state.setupScreenCounter++;
              // navigate("/congrats");
              // dispatch({
              //   type: "COUNTER",
              //   payload: ++state.setupScreenCounter,
              // });
              // }}
            >
              Continue
            </Button>
            <div className={styles.pressEnter}>
              or&nbsp;&nbsp;press enter&nbsp;&nbsp;
              <img src={enterArrow} alt="" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

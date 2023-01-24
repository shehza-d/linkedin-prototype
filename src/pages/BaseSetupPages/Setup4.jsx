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
import DropDown from "../../components/muiDropDown";
import { useNavigate } from "react-router-dom";

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
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              {
                type: "SETUP_FORM_DATA",
                payload: {
                  ...state.setupFormData,
                  targetProfile: {
                    roleOfPerson: roleOfPersonValue,
                    designation: designationValue,
                    spanOfControl: spanOfControlValue,
                    decisionMaker: decisionMakerValue,
                  },
                },
              },
              {
                type: "COUNTER",
                payload: ++state.setupScreenCounter,
              }
            );
          }}
        >
          <div className={styles.form}>
            <Typography>Define your target profile 4</Typography>

            <div className={styles.flex}>
              <Autocomplete
                sx={{ bgcolor: "#ffffffda", mb: 2, width: 180 }}
                disablePortal
                id=""
                options={[
                  { label: "Development" },
                  { label: "Designing" },
                  { label: "Management" },
                  { label: "Hiring" },
                ]}
                required
                // value={inputValue}
                freeSolo
                onChange={(e, val) => {
                  try {
                    if (val.label !== undefined)
                      setRoleOfPersonValue(val.label);
                  } catch (err) {}
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(e) => setRoleOfPersonValue(e.target.value)}
                    label="Role of person"
                  />
                )}
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
              // onClick={() =>
              onClick={async () => {
                // await state.setupScreenCounter++;
                navigate("/congrats");
                // dispatch({
                //   type: "COUNTER",
                //   payload: ++state.setupScreenCounter,
                // });
              }}
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

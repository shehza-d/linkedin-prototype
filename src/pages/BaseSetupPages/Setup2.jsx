// CSS
import styles from "../../styles/BasePages/setup2.module.css";
// My Custom Component to reduce/reuse code
import DropDown from "../../components/muiDropDown";
// Context API
import { GlobalContext } from "../../context/context.js";
import { useState, useContext } from "react";
// MUI
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import enterArrow from "../../assets/basePages/enterArrow.svg";

export default function Setup2() {
  let { state, dispatch } = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState("");

  const dropdownOptions = [
    { label: "IT services", value: 33 },
    { label: "Marketing services" },
    { label: "E commerce" },
    { label: "Content writing" },
    { label: `Clothing` },
    { label: `Event management` },
    { label: `Fast Food` },
    { label: `Laptop repairing` },
    { label: `Teaching` },
  ];

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
                  product: inputValue,
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
            <Typography>
              What kind of products is your company selling?
            </Typography>
            <DropDown
              width={275}
              options={dropdownOptions}
              freeSolo
              setState={setInputValue}
              label="Sale Product"
            />
            {/*
            old code before shortning <Autocomplete
              sx={{ bgcolor: "#ffffffda", mb: 2, width: 275 }}
              disablePortal
              id=""
              options={dropdownOptions}
              required
              // value={inputValue}
              freeSolo
              setState={setInputValue}
              onChange={(e, val) => {
                // console.log('val ', val);
                // console.log('e ', e);
                try {
                  if (val.label !== undefined) {
                    setInputValue(val.label);
                  }
                } catch (err) {}
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  onChange={(e) => {
                    // console.log('val ', e.target.value);
                    setInputValue(e.target.value);
                  }}
                  label="Sale Product"
                />
              )}
            /> */}

            <Typography sx={{ color: "#C0C0C0", mb: 1 }}>
              Define your target market segments?
            </Typography>
            <div className={styles.flex}>
              <DropDown label="Industry" disable={true} />
              <DropDown label="Revenue Size" disable={true} />
            </div>
            <div className={styles.flex}>
              <DropDown label="Employee" disable={true} />
              <DropDown label="Geography" disable={true} />
            </div>
          </div>
          {/* <div className={styles.alignn}> */}
          <div className={styles.btn}>
            <Button
              variant="contained"
              size="large"
              sx={{ pl: 6, pr: 6, mr: 1, mt: { xs: 2 } }}
              type="submit"
              // onClick={() => {
              //   dispatch({
              //     type: "COUNTER",
              //     payload: ++state.setupScreenCounter,
              //   });
              // }}
            >
              Continue
            </Button>
            <div className={styles.pressEnter}>
              or&nbsp;&nbsp;press enter&nbsp;&nbsp;
              <img src={enterArrow} alt="" />
            </div>
          </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
}

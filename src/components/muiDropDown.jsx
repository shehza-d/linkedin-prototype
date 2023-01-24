import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function DropDown(props) {
  //Destructuring passed Props
  const { disable, label, freeSolo, setState, options, size, width, ...other } =
    props;

  const dropdownOptions = [
    { label: "Option one" },
    { label: "Option two" },
    { label: "Option three" },
    { label: "Option four" },
  ];
  return (
    <Autocomplete
      sx={{ bgcolor: "#ffffffda", mb: 2, width: width || 180 }}
      // sx={{ width: "180px", mr: 1 }}
      disablePortal
      required
      // value={inputValue}
      freeSolo={freeSolo || false}
      id=""
      disabled={disable || false}
      options={options || dropdownOptions}
      onChange={(e, val) => {
        // console.log('val ', val);
        // console.log('e ', e);
        try {
          if (val.label !== undefined) {
            setState(val.label);
          }
        } catch (err) {}
      }}
      {...other}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          onChange={(e) => {
            // console.log('val ', e.target.value);
            setState(e.target.value);
          }}
          label={label}
        />
      )}
      size={size || "small"}
    />
  );
}

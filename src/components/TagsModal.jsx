import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// import { FiSearch } from "react-icons/fi";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TagBtn from "./tagBtn";
import { RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: 700 },
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: { xs: 2, md: 4 },
};

export default function TagsModal({ setTags, isOpen, setIsOpen }) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 568px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  // console.log(matches);

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            p: 2,
          }}
        >
          <div></div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Industry
            </Typography>
            {/* <input type="search" /> */}
            {/* sx={{border:"2px solid red"}} */}

            <SearchBar/>
            {/* <TextField
            // disableSty
              sx={{

                ml: 2,
                border: "none",
                borderRadius: "12px",
                bgcolor: "#ededf3e9",
              }}
              placeholder="Search Industries"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <FiSearch />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            /> */}
          </Box>
          <button onClick={() => setIsOpen(!isOpen)}>
            <RxCross1 />
          </button>
        </Box>
        <Box sx={{ pt: 2 }}>
          <TagBtn label="aerospace" setTags={setTags} />
          <TagBtn label="telecommunication" setTags={setTags} />
          <TagBtn label="food" setTags={setTags} />
          <TagBtn label="entertainment" setTags={setTags} />
          <TagBtn label="health care" setTags={setTags} />
          <TagBtn label="pharmaceutical" setTags={setTags} />
          <TagBtn label="education" setTags={setTags} />
          <TagBtn label="computer" setTags={setTags} />
          <TagBtn label="construction" setTags={setTags} />
          <TagBtn label="agriculture" setTags={setTags} />
          <TagBtn label="hospitality" setTags={setTags} />
          <TagBtn label="transport" setTags={setTags} />
          <TagBtn label="media" setTags={setTags} />
          <TagBtn label="economics" setTags={setTags} />
          <TagBtn
            label="computers and information technology"
            setTags={setTags}
          />
          <TagBtn label="health care" setTags={setTags} />
          <TagBtn label="financial technology" setTags={setTags} />
          <TagBtn label="financial services" setTags={setTags} />
          <TagBtn label="mining" setTags={setTags} />
          <TagBtn label="retail" setTags={setTags} />
          <TagBtn label="rail transport" setTags={setTags} />
          <TagBtn label="aerospace" setTags={setTags} />
          <TagBtn label="biotechnology" setTags={setTags} />
          <TagBtn label="forestry" setTags={setTags} />
          <TagBtn label="insurance" setTags={setTags} />
          <TagBtn label="pharmacy" setTags={setTags} />
          <TagBtn label="fashion design" setTags={setTags} />
          <TagBtn label="accounting" setTags={setTags} />
          <TagBtn label="building material" setTags={setTags} />
          {matches ? (
            <>
              <TagBtn label="music" setTags={setTags} />
              <TagBtn label="distribution" setTags={setTags} />
              <TagBtn label="credit" setTags={setTags} />
              <TagBtn label="nuclear power" setTags={setTags} />
              <TagBtn label="real estate" setTags={setTags} />
              <TagBtn label="energy" setTags={setTags} />
              <TagBtn label="financial" setTags={setTags} />
              <TagBtn label="health care" setTags={setTags} />
              <TagBtn label="financial services" setTags={setTags} />
              <TagBtn label="corporation" setTags={setTags} />
              <TagBtn label="rail transport" setTags={setTags} />
              <TagBtn label="retail" setTags={setTags} />
              <TagBtn label="music" setTags={setTags} />
              <TagBtn label="credit" setTags={setTags} />
            </>
          ) : null}

          {/* <TagBtn label="Computer" setTags={setTags} /> */}

          {/* <form onSubmit={handleTagsInputs}>
	  <label
		name="one"
		className={`${styles.tag} ${styles.checkedTag}`}
	  >
		one
		<input type="checkbox" name="one" id="" value="onee" hidden />
	  </label>
	  <label
		name="two"
		className={`${styles.tag} `}
	  >
		two
		<input type="checkbox" name="two" id="" value="twoo" hidden />
	  </label>
	  <label
		name="three"
		className={`${styles.tag} ${styles.checkedTag}`}
	  >
		three
		<input type="checkbox" name="three" value="threee" hidden />
	  </label>
	  <button type="submit">sfdffffffffff</button>
	</form> */}
        </Box>
      </Box>
    </Modal>
  );
}

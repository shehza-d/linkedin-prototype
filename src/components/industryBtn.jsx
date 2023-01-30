import { useState } from "react";
import styles from "../styles/dashboard/allContent.module.css";

export default function IndustryBtn({ label, setTags, setSearchh }) {
  const [isClicked, setIsClicked] = useState(null);
  label = label.toLowerCase();

  return (
    <>
      <button
        className={`${styles.btn} ${isClicked ? styles.blueBtn : null}`}
        onClick={() => {
          setTags((prev) => {
            if (prev.includes(label)) {
              setIsClicked(false);
              setSearchh("");
              const index = prev.indexOf(label);
              if (index > -1) {
                prev.splice(index, 1);
              }
              return [...prev];
            } else {
              setIsClicked(true);
              setSearchh(label);
              return [...prev, label];
            }
          });
        }}
      >
        {label}
      </button>
    </>
  );
}

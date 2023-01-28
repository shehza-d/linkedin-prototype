import { useState } from "react";
import styles from "../styles/dashboard/allContent.module.css";

export default function TagBtn({ label, setTags }) {
  const [isClicked, setIsClicked] = useState(null);
  label = label.toLowerCase();

  return (
    <>
      <button
        className={`${styles.tag} ${isClicked ? styles.checkedTag : null}`}
        onClick={() =>
          setTags((prev) => {
            if (prev.includes(label)) {
              setIsClicked(false);
              const index = prev.indexOf(label);
              if (index > -1) {
                prev.splice(index, 1);
              }
              return [...prev];
            } else {
              setIsClicked(true);
              return [...prev, label];
            }
          })
        }
      >
        {label}
      </button>
    </>
  );
}

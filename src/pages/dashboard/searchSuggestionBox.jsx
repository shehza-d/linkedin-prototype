import styles from "../../styles/dashboard/searchSuggestionBox.module.css";
import apple from "../../assets/dashboard/apple.png";
import amazon from "../../assets/dashboard/amazon.png";
import adobe from "../../assets/dashboard/adobe.png";
import mapPin from "../../assets/dashboard/map-pin.svg";
import star from "../../assets/dashboard/Star.svg";

function SearchItem(props) {
  return (
    <div className={styles.itemContainer}>
      <img src={props.icon} style={{ padding: "10px" }} alt="" />
      <div className={styles.text}>
        <div className={styles.flex}>
          <span>{props.title}</span>
          <div style={{ paddingLeft: "15px" }}>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>

        <span>{props.description}</span>
        <div className={styles.flex}>
          <img src={mapPin} alt="" />
          <span style={{ color: "#1A5CB0", paddingLeft: "7px" }}>
            {" "}
            {props.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SearchSuggestion() {
  return (
    <div className={styles.container}>
      <SearchItem
        title="Apple"
        icon={apple}
        description="Electronics"
        location="Cupertino, California"
      />
      <SearchItem
        title="Amazon"
        icon={amazon}
        description="e-commerce, cloud computing, digital streaming, and artificial intelligence."
        location="Seattle"
      />
      <SearchItem
        title="Adobe"
        icon={adobe}
        description="American multinational computer software company"
        location="Mountain View, California, United States"
      />
    </div>
  );
}

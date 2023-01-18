import styles from "../../styles/dashboard/searchCard.module.css";
import star from "../../assets/dashboard/Star.svg";

export default function SearchCard({
  heading,
  text,
  img,
  logo,
  number,
  address,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.cardHeader}>
          <img src={logo} alt="" />
          <div>
            <p>{heading}</p>
            <p>electronics</p>
          </div>
          <div>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <p>{text}</p>
        <div className={styles.cardFooter}>
          <span>{number}</span>
          <span>{address}</span>
        </div>
      </div>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

import styles from "../../styles/dashboard/screen3.module.css";

function Users() {
  return <div className={styles.user}></div>;
}

export default function Screen3() {
  return (
    <div className={styles.container}>
      <div className={styles.rightUsersSection}>
        <Users />
         <Users />
        <Users />
        <Users />
        {/*<Users /> */}
      </div>
    </div>
  );
}

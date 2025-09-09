import { useSelector } from "react-redux";
import styles from "./WorksOption.module.scss";

export default function WorksOptions({ active, setActive }) {
  const options = ["Website Development", "UI/UX Design", "Art Illustrations"];
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={styles.worksOptions}>
      {options.map((opt) => (
        <h3
          key={opt}
          className={`${styles.option} ${active === opt ? styles.active : ""} ${
            theme === "dark" ? styles.dark : ""
          }`}
          onClick={() => {
            setActive(opt);
          }}
        >
          {opt}
        </h3>
      ))}
    </div>
  );
}

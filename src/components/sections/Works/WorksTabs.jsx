import { useSelector } from "react-redux";
import styles from "./WorksTabs.module.scss";

export default function WorksTabs({ active, setActive }) {
  const categories = ["Web Development", "UI/UX Design", "Illustrations"];
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={styles.tabs}>
      {categories.map((cat) => (
        <h3
          key={cat}
          className={`${styles.tab} ${active === cat ? styles.active : ""} ${
            theme === "dark" ? styles.dark : ""
          }`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </h3>
      ))}
    </div>
  );
}
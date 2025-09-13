import { useSelector } from "react-redux";
import BackgroundList from "../../../lists/BackgroundList";
import EducationList from "../../../lists/EducationList";

import styles from "./BackgroundSection.module.scss";

export default function BackgroundSection() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        I am the sum of all my experiences and education.
      </h1>

      <div className={styles.grid}>
        <div className={styles.column}>
          <BackgroundList />
        </div>

        <div className={styles.column}>
          <h2 className={`${styles.subtitle} ${theme === "dark" ? styles.dark : ""}`}>
            Education
          </h2>
          <EducationList />
        </div>
      </div>
    </section>
  );
}
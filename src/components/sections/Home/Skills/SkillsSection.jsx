import { useSelector } from "react-redux";
import SkillsList from "../../../lists/SkillsList";
import styles from "./SkillsSection.module.scss";

export default function SkillsSection() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section className={`${styles.skillsSection} ${theme === "dark" ? styles.dark : ""}`}>
      <h1 className={styles.title}>The Skills I&apos;ve Learned.</h1>

      <div className={styles.list}>
        <SkillsList />
      </div>
    </section>
  );
}
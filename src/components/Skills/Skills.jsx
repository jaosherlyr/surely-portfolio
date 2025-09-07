import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import SkillsList from "../Lists/SkillsList";
import styles from "./Skills.module.scss";
import { useSelector } from "react-redux";

export default function Skills() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={`${styles.skillSection} ${theme === 'dark' ? styles.dark : ''}`}>
      <h1 className={styles.skillTitle}>The Skills I've Learned.</h1>

      <div className={styles.skillsList}>
        <SkillsList />
      </div>
    </div>
  );
}

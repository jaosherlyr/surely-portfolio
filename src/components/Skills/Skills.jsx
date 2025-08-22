import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import SkillsList from "../Lists/SkillsList";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.skillSection}>
      <h1>The Skills I've Learned.</h1>

      <div className={styles.skillsList}>
        <SkillsList />
      </div>
    </div>
  );
}

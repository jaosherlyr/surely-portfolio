import { useSelector } from "react-redux";

import styles from "./styles/SkillCard.module.scss";

export default function SkillCard({ title, description, list, isActive, isAnyActive, onToggle }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`
        ${styles.card}
        ${isActive ? styles.raised : ""}
        ${isAnyActive && !isActive ? styles.disabled : ""}
        ${theme === "dark" ? styles.dark : ""}
      `}
      data-raised={isActive ? "true" : undefined}
      onClick={onToggle}
      role="button"
    >
      <div>
        <h3 className={`${styles.title} ${theme === "dark" ? styles.dark : ""}`}>
          {title}
        </h3>
        <p className={`${styles.desc} ${theme === "dark" ? styles.dark : ""}`}>
          {description}
        </p>
      </div>

      <div className={styles.list}>
        <div className={styles.track}>
          {list.map((item, i) => (
            <p key={`a-${i}`} className={`${styles.item} ${theme === "dark" ? styles.dark : ""}`}>
              {item}
            </p>
          ))}
          {list.map((item, i) => (
            <p key={`b-${i}`} className={`${styles.item} ${theme === "dark" ? styles.dark : ""}`}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
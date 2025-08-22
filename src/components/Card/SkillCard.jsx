import { useSelector } from 'react-redux';
import styles from './styles/SkillCard.module.scss';

export default function SkillCard({ title, description, list, isActive, isAnyActive, onToggle }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`
        ${styles.skillCardContainer}
        ${isActive ? styles.raised : ""}
        ${isAnyActive && !isActive ? styles.disabled : ""}
        ${theme === "dark" ? styles.dark : ""}
      `}
      onClick={onToggle}
      role="button"
    >
      
      <h3 className={`${theme === 'dark' ? styles.dark : ''}`}>{title}</h3>

      <p className={`${styles.skillDesc} ${theme === 'dark' ? styles.dark : ''}`}>
        {description}
      </p>

      <div className={styles.listWrap}>
        <div className={styles.track}>
            {list.map((item, i) => (
                <p key={`a-${i}`} className={`${styles.skillList} ${theme === 'dark' ? styles.dark : ''}`}>{item}</p>
            ))}

            {/* duplicated for smoother loop */}
            {list.map((item, i) => (
                <p key={`b-${i}`} className={`${styles.skillList} ${theme === 'dark' ? styles.dark : ''}`}>{item}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import styles from "./styles/WorkCard.module.scss";
import WorkGallery from "../Works/WorkGallery";

export default function WorkCard({
  title,
  timeline,
  media,
  details,
  isExpanded,
  isAnyExpanded,
  onToggle,
}) {
  const theme = useSelector((state) => state.theme.mode);

  const mediaArray = useMemo(() => {
    return Array.isArray(media) ? media.filter(Boolean) : media ? [media] : [];
  }, [media]);

  const [heroIndex, setHeroIndex] = useState(0);
  const hero = mediaArray[heroIndex];

  return (
    <div
      className={`${styles.workCard} ${isExpanded ? styles.expanded : ""} ${
        isAnyExpanded && !isExpanded ? styles.notExpanded : ""
      }`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
    >
      {hero && (
        <div className={styles.hero}>
          <img className={styles.workImg} src={hero} alt={title} loading="eager" />
        </div>
      )}

      <h3 className={styles.workTitle}>{title}</h3>

      <div
        className={`${styles.details} ${isExpanded ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={`${styles.workDate} ${theme === "dark" ? styles.dark : ""}`}>
          <em>{timeline}</em>
        </p>
        <p className={styles.workDetails}>{details}</p>

        {mediaArray.length > 1 && (
          <WorkGallery
            mediaArray={mediaArray}
            heroIndex={heroIndex}
            onSelect={setHeroIndex}
            isExpanded={isExpanded}
          />
        )}
      </div>
    </div>
  );
}

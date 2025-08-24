import styles from "./styles/WorkCard.module.scss";

export default function WorkCard({
  title, timeline, media, details,
  isExpanded, isAnyExpanded, onToggle
}) {
  const mediaArray = Array.isArray(media) ? media : [media].filter(Boolean);

  return (
    <div
      className={`
        ${styles.workCard}
        ${isExpanded ? styles.expanded : ""}
        ${isAnyExpanded && !isExpanded ? styles.notExpanded : ""}
      `}
      onClick={onToggle}
      role="button"
    >
      {mediaArray.map((src, i) => (
        <img className={styles.workImg} key={i} src={src} alt={`${title} screenshot ${i + 1}`} loading="lazy" />
      ))}
      <div>
        <h3>{title}</h3>
        <p>{timeline}</p>
        <p className={styles.workDetails}>{details}</p>
      </div>
    </div>
  );
}


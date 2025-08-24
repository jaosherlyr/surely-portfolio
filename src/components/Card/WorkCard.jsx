import Timeline from "../Text/Timeline";
import styles from "./styles/WorkCard.module.scss";

export default function WorkCard({ title, timeline, media, details, isExpanded, isAnyExpanded, onToggle }) {
  const mediaArray = Array.isArray(media) ? media : [media].filter(Boolean);
  const workHero = mediaArray[0];
  const rest = mediaArray.slice(1);

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
      <div className={styles.hero}>
        <img className={styles.workImg} src={workHero} alt={`${title} hero`} />
        <h3 className={styles.heroTitle}>{title}</h3>
      </div>

      <div className={styles.content}>
            <div className={styles.summary}>
                <h3 className={styles.workTitle}>{title}</h3>
                <Timeline>{timeline}</Timeline>
            </div>

        <div className={styles.details}>
            <p className={styles.workDetails}>{details}</p>
        </div>
      </div>

        {rest.length > 0 && (
          <div className={styles.workGallery}>
            {rest.map((src, i) => (
              <img key={i} className={styles.workImg} src={src} alt={`${title} ${i + 2}`} loading="lazy" />
            ))}
          </div>
        )}
    </div>
  );
}

import { useSelector } from "react-redux";
import { IoOpenOutline } from "react-icons/io5";

import styles from "./styles/BackgroundCard.module.scss";
import TimelineText from "../ui/Text/TimelineText";

export default function BackgroundCard({ title, timeline, school, employment, type, link, details, }) {
  const theme = useSelector((state) => state.theme.mode);

  const handleClick = () => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div className={`${styles.card} ${theme === "dark" ? styles.dark : ""}`}>
      <span className={styles.rail} aria-hidden="true" />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <TimelineText className={styles.timeline}>{timeline}</TimelineText>

        {type === "experience" && (
          <p className={styles.subtitle}>{employment}</p>
        )}

        {type === "education" ? (
          <>
            <p
              className={`${styles.subtitle} ${styles.school}`}
              onClick={handleClick}
              style={{ cursor: link ? "pointer" : "default" }}
            >
              {school}
              <IoOpenOutline className={styles.link} />
            </p>

            {details.map((detail, i) => (
              <p key={i} className={styles.detail}>
                {detail}
              </p>
            ))}
          </>
        ) : (
          <p className={styles.detail}>{details}</p>
        )}
      </div>
    </div>
  );
}

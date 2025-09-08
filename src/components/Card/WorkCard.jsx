import { useState, useMemo, useEffect, useRef } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import styles from "./styles/WorkCard.module.scss";
import Gallery from "../Gallery/Gallery";

export default function WorkCard({ title, timeline, media, link, details, isExpanded, isAnyExpanded, onToggle }) {
  const theme = useSelector((state) => state.theme.mode);
  const cardRef = useRef(null);

  const mediaArray = useMemo(() => {
    return Array.isArray(media) ? media.filter(Boolean) : media ? [media] : [];
  }, [media]);

  const [heroIndex, setHeroIndex] = useState(0);
  const hero = mediaArray[heroIndex];

  useEffect(() => {
    if (!isExpanded || !cardRef.current) return;

    const headerH = (document.querySelector("header")?.offsetHeight ?? 0) + 12;
    const el = cardRef.current;

    const scrollIfNeeded = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const clippedTop = rect.top < headerH;
      const clippedBottom = rect.bottom > vh;

      if (clippedTop || clippedBottom) {
        const targetTop = window.scrollY + rect.top - headerH;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
      }
    };

    requestAnimationFrame(() => requestAnimationFrame(scrollIfNeeded));

    const detailsEl = el.querySelector(`.${styles.details}`);
    const onEnd = (e) => {
      if (e.propertyName === "max-height") scrollIfNeeded();
    };
    detailsEl?.addEventListener("transitionend", onEnd);

    return () => detailsEl?.removeEventListener("transitionend", onEnd);
  }, [isExpanded]);

  const handleLinkClick = (e) => {
    e.stopPropagation(); // prevent expanding/collapsing
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
        ${styles.workCard} 
        ${isExpanded ? styles.expanded : ""} 
        ${isAnyExpanded && !isExpanded ? styles.notExpanded : ""
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

        {link && (
          <div
            className={`${styles.link} ${theme === "dark" ? styles.dark : ""}`}
            onClick={handleLinkClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleLinkClick(e)}
          >
            <p>Check it out!</p>
            <span className={styles.icon}>
              <IoOpenOutline />
            </span>
          </div>
        )}

        {mediaArray.length > 1 && (
          <Gallery
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

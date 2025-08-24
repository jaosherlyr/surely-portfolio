import { useState, useEffect } from "react";
import { IoOpenOutline } from "react-icons/io5";

import Timeline from "../Text/Timeline";
import styles from "./styles/WorkCard.module.scss";
import { useSelector } from "react-redux";

export default function WorkCard({ title, timeline, media, details, link, isExpanded, isAnyExpanded, onToggle }) {
  const mediaArray = Array.isArray(media) ? media : [media].filter(Boolean);
  const theme = useSelector((state) => state.theme.mode);

  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => { setHeroIndex(0); }, [media]);

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    return (
        <div
        className={`
            ${isExpanded ? styles.expanded : styles.workCard}
            ${isAnyExpanded && !isExpanded ? styles.notExpanded : ""}
        `}
        onClick={onToggle}
        >
            <div className={styles.hero}>
                <img
                className={styles.workImg}
                src={mediaArray[heroIndex]}
                />

                <h3 className={styles.heroTitle}>{title}</h3>
            </div>

            <div className={styles.content}>
                <div className={styles.summary}>
                    <h3 
                        className={styles.workTitle}
                        onClick={isExpanded ? handleClick : ''}
                    >
                            {title}
                            {isExpanded && (
                                <span>
                                    <IoOpenOutline />
                                </span>
                            )}
                    </h3>

                    <Timeline>{timeline}</Timeline>
                    <p className={styles.workDetails}>{details}</p>
                </div>
            </div>

            <div className={`${styles.workGallery} ${theme === 'dark' ? styles.dark : ''}`} onClick={(e) => e.stopPropagation()}>
            {mediaArray.map((src, i) => (
                <img
                key={i}
                className={`${styles.workImg} ${i === heroIndex ? styles.activeThumb : ""}`}
                src={src}
                loading="lazy"
                onClick={() => setHeroIndex(i)}
                role="button"
                tabIndex={0}
                />
            ))}

            </div>
        </div>
    );
}

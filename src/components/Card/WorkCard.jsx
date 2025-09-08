import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import styles from "./styles/WorkCard.module.scss";

export default function WorkCard({ title, timeline, media, details, isExpanded, isAnyExpanded, onToggle }) {
    const theme = useSelector((state) => state.theme.mode);
    const mediaArray = Array.isArray(media) ? media.filter(Boolean) : media ? [media] : [];

    const [heroIndex, setHeroIndex] = useState(0);
    const hero = mediaArray[heroIndex];

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => { setHeroIndex(0); }, [media]);

    useEffect(() => {
        const checkScroll = () => {
            if (!galleryRef.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;

            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        };

        checkScroll();
        const gallery = galleryRef.current;
        gallery?.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            gallery?.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };  
    }, [mediaArray]);

    const scrollBy = (offset) => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: offset, behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (!isExpanded && galleryRef.current) {
            galleryRef.current.scrollLeft = 0;

            const { clientWidth, scrollWidth } = galleryRef.current;
            setCanScrollLeft(false);
            setCanScrollRight(clientWidth < scrollWidth);
        }
    }, [isExpanded]);

    return (
        <div
        className={`${styles.workCard} ${isExpanded ? styles.expanded : ""} ${isAnyExpanded && !isExpanded ? styles.notExpanded : ""}`}
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
            <p className={`${styles.workDate} ${theme === 'dark' ? styles.dark : ''}`}><em>{timeline}</em></p>
            <p className={styles.workDetails}>{details}</p>

            {mediaArray.length > 1 && (
            <div className={styles.workGalleryContainer}>
                <span
                    className={`${styles.arrow} ${canScrollLeft ? styles.active : ""}`}
                    onClick={() => canScrollLeft && scrollBy(-200)}
                >
                    <IoChevronBackOutline />
                </span>

                <div className={`${styles.gallery} ${!canScrollLeft && !canScrollRight ? styles.centered : ''}`} ref={galleryRef}>
                    {mediaArray.map((src, i) => (
                    <img
                        key={i}
                        className={`${styles.workImg} ${i === heroIndex ? styles.activeThumb : ""}`}
                        src={src}
                        alt={`${title} image ${i + 1}`}
                        loading="lazy"
                        onClick={() => setHeroIndex(i)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setHeroIndex(i)}
                    />
                    ))}
                </div>

                <span
                    className={`${styles.arrow} ${canScrollRight ? styles.active : ""}`}
                    onClick={() => canScrollRight && scrollBy(200)}
                >
                    <IoChevronForwardOutline />
                </span>
            </div>
            )}
        </div>
        </div>
    );
}

import { useState, useMemo, useEffect, useRef } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import usePrefetchImages from "../../hooks/usePrefetchImages";
import styles from "./styles/ProjectCard.module.scss";
import MediaGallery from "../ui/Media/MediaGallery";
import MediaModal from "../ui/Media/MediaModal";

export default function ProjectCard({ title, timeline, media, link, details, isExpanded, isAnyExpanded, onToggle, }) {
  const theme = useSelector((state) => state.theme.mode);
  const cardRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mediaArray = useMemo(() => {
    return Array.isArray(media) ? media.filter(Boolean) : media ? [media] : [];
  }, [media]);

  const [heroIndex, setHeroIndex] = useState(0);
  const hero = mediaArray[heroIndex];

  // === Prefetch rest of gallery on hover or expand ===
  usePrefetchImages(mediaArray.slice(1), hovered || isExpanded);

  // Also warm first 2 gallery images when card is near viewport
  useEffect(() => {
    const el = cardRef.current;
    if (!el || mediaArray.length <= 1) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          mediaArray.slice(1, 3).forEach((src) => {
            const img = new Image();
            img.decoding = "async";
            img.src = src;
          });
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [mediaArray]);

  // === Scroll into view when expanding ===
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
    e.stopPropagation();
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleHeroClick = (e) => {
    e.stopPropagation();
    if (!isExpanded) {
      onToggle?.();
    } else {
      setModalOpen(true);
    }
  };

  const handleHeroKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleHeroClick(e);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
        ${styles.card}
        ${isExpanded ? styles.expanded : ""}
        ${isAnyExpanded && !isExpanded ? styles.dimmed : ""}
      `}
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hero && (
        <div
          className={styles.hero}
          onClick={handleHeroClick}
          onKeyDown={handleHeroKeyDown}
          role="button"
          tabIndex={0}
          aria-label={isExpanded ? "Open image viewer" : "Expand project card"}
        >
          <img
            className={styles.image}
            src={hero}
            alt={title}
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      )}

      <h3 className={styles.title}>{title}</h3>

      <div
        className={`${styles.details} ${isExpanded ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={`${styles.date} ${theme === "dark" ? styles.dark : ""}`}>
          <em>{timeline}</em>
        </p>

        <p className={styles.description}>{details}</p>

        {link && (
          <div
            className={`${styles.link} ${theme === "dark" ? styles.dark : ""}`}
            onClick={handleLinkClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleLinkClick(e)
            }
          >
            <p>Check it out!</p>
            <span className={styles.icon}>
              <IoOpenOutline />
            </span>
          </div>
        )}

        {mediaArray.length > 1 && (
          <MediaGallery
            mediaArray={mediaArray}
            heroIndex={heroIndex}
            onSelect={setHeroIndex}
            isExpanded={isExpanded}
          />
        )}
      </div>

      {isModalOpen && (
        <MediaModal
          mediaArray={mediaArray}
          activeIndex={heroIndex}
          onSelect={setHeroIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
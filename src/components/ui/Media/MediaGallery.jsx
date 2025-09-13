import { useEffect, useRef, useState, useCallback } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import styles from "./MediaGallery.module.scss";

export default function MediaGallery({ mediaArray, heroIndex, onSelect, isExpanded }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  }, []);

  const scrollBy = (offset) => {
    trackRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  // reset active index when media changes
  useEffect(() => {
    onSelect(0);
  }, [mediaArray, onSelect]);

  // update scroll indicators
  useEffect(() => {
    checkScroll();
    const el = trackRef.current;
    el?.addEventListener("scroll", checkScroll);

    const ro = new ResizeObserver(checkScroll);
    if (el) ro.observe(el);

    window.addEventListener("resize", checkScroll);
    window.addEventListener("orientationchange", checkScroll);

    return () => {
      el?.removeEventListener("scroll", checkScroll);
      ro.disconnect();
      window.removeEventListener("resize", checkScroll);
      window.removeEventListener("orientationchange", checkScroll);
    };
  }, [checkScroll, mediaArray]);

  // reset scroll on collapse
  useEffect(() => {
    if (!isExpanded && trackRef.current) {
      trackRef.current.scrollLeft = 0;
      const { clientWidth, scrollWidth } = trackRef.current;
      setCanScrollLeft(false);
      setCanScrollRight(clientWidth < scrollWidth);
    }
  }, [isExpanded]);

  return (
    <div className={styles.container}>
      <button
        type="button"
        aria-label="Scroll left"
        className={`${styles.arrow} ${canScrollLeft ? styles.active : ""}`}
        onClick={() => canScrollLeft && scrollBy(-200)}
      >
        <IoChevronBackOutline />
      </button>

      <div
        className={`${styles.track} ${!canScrollLeft && !canScrollRight ? styles.centered : ""}`}
        ref={trackRef}
      >
        {mediaArray.map((src, i) => (
          <img
            key={i}
            className={`${styles.thumb} ${i === heroIndex ? styles.active : ""}`}
            src={src}
            alt={`image ${i + 1}`}
            loading="lazy"
            onClick={() => onSelect(i)}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll right"
        className={`${styles.arrow} ${canScrollRight ? styles.active : ""}`}
        onClick={() => canScrollRight && scrollBy(200)}
      >
        <IoChevronForwardOutline />
      </button>
    </div>
  );
}
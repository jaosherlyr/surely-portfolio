import { useEffect, useRef, useState, useCallback } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import styles from "./Gallery.module.scss";

export default function Gallery({ mediaArray, activeIndex, onSelect, isExpanded }) {
  const galleryRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = galleryRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  }, []);

  const scrollBy = (offset) => {
    galleryRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  // reset active index when media changes
  useEffect(() => {
    onSelect(0);
  }, [mediaArray, onSelect]);

  // update scroll indicators
  useEffect(() => {
    checkScroll();
    const el = galleryRef.current;
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
    if (!isExpanded && galleryRef.current) {
      galleryRef.current.scrollLeft = 0;
      const { clientWidth, scrollWidth } = galleryRef.current;
      setCanScrollLeft(false);
      setCanScrollRight(clientWidth < scrollWidth);
    }
  }, [isExpanded]);

  return (
    <div className={styles.galleryContainer}>
      <span
        className={`${styles.arrow} ${canScrollLeft ? styles.active : ""}`}
        onClick={() => canScrollLeft && scrollBy(-200)}
      >
        <IoChevronBackOutline />
      </span>

      <div
        className={`${styles.galleryTrack} ${!canScrollLeft && !canScrollRight ? styles.centered : ""}`}
        ref={galleryRef}
      >
        {mediaArray.map((src, i) => (
          <img
            key={i}
            className={`${styles.galleryImg} ${i === activeIndex ? styles.activeThumb : ""}`}
            src={src}
            alt={`image ${i + 1}`}
            loading="lazy"
            onClick={() => onSelect(i)}
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
  );
}
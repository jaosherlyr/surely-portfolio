import { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import SkillsList from "../Lists/SkillsList";
import styles from "./Skills.module.scss";

export default function Skills() {
  const trackRef = useRef(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const cols = window.matchMedia("(max-width: 640px)").matches
        ? 1
        : window.matchMedia("(max-width: 1024px)").matches
        ? 2
        : 3;
      setVisibleCount(cols);

      setCanPrev(el.scrollLeft > 0);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    const onScroll = () => update();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const cardWidth = el.clientWidth / visibleCount;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className={styles.skillSection}>
      <h1 className={styles.skillTitle}>The Skills I've Learned.</h1>

      <div className={styles.carouselWrap}>
        <IoChevronBackOutline 
            className={`${styles.navButton} ${styles.prev}`} 
            onClick={() => scrollByCards(-1)} 
            disabled={!canPrev}
            />
          
        <div className={styles.skillCardTrack} ref={trackRef}>
          <SkillsList />
        </div>

        <IoChevronForward 
            className={`${styles.navButton} ${styles.prev}`}
            onClick={() => scrollByCards(-1)} 
            disabled={!canPrev}
        />
      </div>
    </section>
  );
}

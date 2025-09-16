// src/components/Intro/IntroSection/IntroMedia.jsx
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import styles from "./IntroSection.module.scss";

export default function IntroMedia() {
  const theme = useSelector((s) => s.theme.mode);

  const ring = theme === "dark"
    ? "/images/ring/introRing-dark.webp"
    : "/images/ring/introRing-light.webp";

  const profileImgs = useMemo(
    () => [
      "/images/profile/profileImg-1.webp",
      "/images/profile/profileImg-2.webp",
      "/images/profile/profileImg-3.webp",
      "/images/profile/profileImg-4.webp",
      "/images/profile/profileImg-5.webp",
      "/images/profile/profileImg-6.webp",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profileImgs.length);
    }, 60_000);
    return () => clearInterval(id);
  }, [profileImgs.length]);

  useEffect(() => {
    const next = profileImgs[(index + 1) % profileImgs.length];
    const img = new Image();
    img.decoding = "async";
    img.src = next;
  }, [index, profileImgs]);

  return (
    <div className={styles.left}>
      <div className={styles.media}>
        <img
          className={styles.ring}
          src={ring}
          alt="Rotating circle text"
          fetchpriority="high"
          decoding="async"
          width="800"
          height="800"
        />

        {profileImgs.map((img, i) => (
          <picture
            key={i}
            className={`${styles.avatar} ${i === index ? styles.active : ""}`}
          >
            <source srcSet={img} type="image/webp" />
            <img
              src={img}
              alt={`Profile ${i + 1}`}
              loading={i === index ? "eager" : "lazy"}
              decoding="async"
              fetchpriority={i === index ? "high" : "auto"}
              width="600"
              height="600"
            />
          </picture>
        ))}
      </div>
    </div>
  );
}
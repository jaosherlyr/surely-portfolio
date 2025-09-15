import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import profileImg1 from "../../../../assets/Images/profile/profileImg-1.jpg";
import profileImg2 from "../../../../assets/Images/profile/profileImg-2.jpeg";
import profileImg3 from "../../../../assets/Images/profile/profileImg-3.jpg";
import profileImg4 from "../../../../assets/Images/profile/profileImg-4.jpg";
import profileImg5 from "../../../../assets/Images/profile/profileImg-5.jpg";
import profileImg6 from "../../../../assets/Images/profile/profileImg-6.jpg";

import ringLight from "../../../../assets/Images/ring/introRing-light.png";
import ringDark from "../../../../assets/Images/ring/introRing-dark.png";
import styles from "./IntroSection.module.scss";

export default function IntroMedia() {
  const theme = useSelector((state) => state.theme.mode);
  const ring = theme === "dark" ? ringDark : ringLight;

  const profileImgs = [
    profileImg1,
    profileImg2,
    profileImg3,
    profileImg4,
    profileImg5,
    profileImg6,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % profileImgs.length);
    }, 60000); 
    return () => clearInterval(interval);
  }, [profileImgs.length]);

  return (
    <div className={styles.left}>
      <div className={styles.media}>
        <img className={styles.ring} src={ring} alt="Rotating circle text" />

        {profileImgs.map((img, i) => (
          <img
            key={i}
            className={`${styles.avatar} ${i === index ? styles.active : ""}`}
            src={img}
            alt={`Profile ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
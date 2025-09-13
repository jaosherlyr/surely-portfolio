// imports
import profileImg from "../../../../assets/Images/profilePicture.jpg";
import tempRotateText from "../../../../assets/_test_/exampleText.png";

import styles from "./IntroSection.module.scss";

export default function IntroMedia() {
  return (
    <div className={styles.left}>
      <div className={styles.media}>
        <img className={styles.ring} src={tempRotateText} alt="Rotating circle text" />
        <img className={styles.avatar} src={profileImg} alt="Profile" />
      </div>
    </div>
  );
} 
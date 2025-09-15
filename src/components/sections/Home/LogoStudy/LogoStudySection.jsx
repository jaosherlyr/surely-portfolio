import { useSelector } from "react-redux";

import logoStudyLight from "../../../../assets/Images/logoStudy/logoStudy-light.png";
import logoStudyDark from "../../../../assets/Images/logoStudy/logoStudy-dark.png";
import styles from "./LogoStudySection.module.scss";

export default function LogoStudySection() {
  const theme = useSelector((state) => state.theme.mode);
  const logoStudyImg = theme === "dark" ? logoStudyDark : logoStudyLight;

  return (
    <section className={styles.logoStudySection}>
      <div className={styles.left}>
        <h1 className={styles.title}>Where Identity meets Design</h1>

        <p className={styles.desc}>
          This logo is the result of my identity, my culture, and my creativity.
        </p>

        <h3 className={styles.char}>"ᜐ" + "S"</h3>

        <p className={styles.desc}>
          I used the precolonial writing script of the Philippines, Baybayin. 
          The character ᜐ is read as ‘sa’, which I combined with the modern letter ‘S’ to represent my name.
        </p>
      </div>

      <img
        className={styles.image}
        src={logoStudyImg}
        alt="Logo Study - Personal logo design"
      />
    </section>
  );
}
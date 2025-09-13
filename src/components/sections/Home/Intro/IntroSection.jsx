import { useSelector } from "react-redux";
import IntroMedia from "./IntroMedia";
import IntroContent from "./IntroContent";

import styles from "./IntroSection.module.scss";

export default function IntroSection() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section className={`${styles.section} ${theme === "dark" ? styles.dark : ""}`}>
      <IntroMedia />
      <IntroContent />
    </section>
  );
}
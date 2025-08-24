import { useSelector } from "react-redux";
import DesignsList from "../components/Lists/DesignsList";
import IllustrationsList from "../components/Lists/IllustrationsList";
import WebProjectsList from "../components/Lists/WebProjectsList";

import styles from "./styles/Works.module.scss";

export default function Works() {
  const theme = useSelector((state) => state.theme.mode);

  return(
    <section id="works" className={styles.worksContainer}>
      <h1 className={styles.worksTitle}>Explore my Works!</h1>

      <div className={styles.subworkContainer}>
        <h2 className={`${styles.worksSubtitle} ${theme === 'dark' ? styles.dark : ''}`}>Developments</h2>
        <div className={styles.worksListContainer}>
          <WebProjectsList/>
        </div>
      </div>

      <div className={styles.subworkContainer}>
        <h2 className={`${styles.worksSubtitle} ${theme === 'dark' ? styles.dark : ''}`}>UI/UX Designs</h2>
        <div className={styles.worksListContainer}>
          <DesignsList />
        </div>
      </div>
      
      <div className={styles.subworkContainer}>
        <h2 className={`${styles.worksSubtitle} ${theme === 'dark' ? styles.dark : ''}`}>Illustrations</h2>
        <div className={styles.worksListContainer}>
          <IllustrationsList />
        </div>
      </div>
    </section>
  );
}
import DesignsList from "../components/Lists/DesignsList";
import IllustrationsList from "../components/Lists/IllustrationsList";
import WebProjectsList from "../components/Lists/WebProjectsList";

import styles from "./styles/Works.module.scss";

export default function Works() {
  return(
    <section id="works" className={styles.worksContainer}>
      <h1 className={styles.worksTitle}>Explore my Works!</h1>

      <h2>Developments</h2>
      <div className={styles.worksListContainer}>
        <WebProjectsList/>
      </div>

      <h2>UI/UX Designs</h2>
      <div className={styles.worksListContainer}>
        <DesignsList />
      </div>

      <h2>Illustrations</h2>
      <div className={styles.worksListContainer}>
        <IllustrationsList />
      </div>
    </section>
  );
}
import DesignsList from "../components/Lists/DesignsList";
import IllustrationsList from "../components/Lists/IllustrationsList";
import WebProjectsList from "../components/Lists/WebProjectsList";

import styles from "./styles/Works.module.scss";
import { useState } from "react";
import WorksOptions from "../components/Works/WorksOption";

export default function Works() {
  const [active, setActive] = useState("default");

  return (
    <section id="works" className={`paddedContent ${styles.worksContainer}`}>
      <h1 className={styles.worksTitle}>Explore my Works!</h1>

      <WorksOptions active={active} setActive={setActive} />

      <div className={styles.display}>
        {active === "default" && <h2>Select an option!</h2>}

        {active === "Website Development" && <WebProjectsList />}
        {active === "UI/UX Design" && <DesignsList />}
        {active === "Art Illustrations" && <IllustrationsList />}
      </div>
    </section>
  );
}

import WebProjects from "../components/lists/WebProjects";
import ProductDesignProjects from "../components/lists/ProductDesignProjects"
import IllustrationProjects from "../components/lists/IllustrationProjects"
import WorksTabs from "../components/sections/Works/WorksTabs";

import styles from "./styles/Works.module.scss";

import { useState } from "react";

export default function WorksSection() {
  const [active, setActive] = useState("default");

  return (
    <section id="works" className={`paddedContent ${styles.worksSection}`}>
      <h1 className={styles.worksTitle}>Explore My Works</h1>

      <WorksTabs active={active} setActive={setActive} />

      <div className={styles.worksDisplay}>
        {active === "default" && <h2>Select an option</h2>}

        

        {active === "Web Development" && <WebProjects />}
        {active === "UI/UX Design" && <ProductDesignProjects/>}
        {active === "Illustrations" && <IllustrationProjects />}
      </div>
    </section>
  );
}
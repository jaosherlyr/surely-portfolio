import WebProjects from "../components/lists/WebProjects";
import ProductDesignProjects from "../components/lists/ProductDesignProjects"
import IllustrationProjects from "../components/lists/IllustrationProjects"
import WorksTabs from "../components/sections/Works/WorksTabs";

import styles from "./styles/Works.module.scss";

import { useState } from "react";
import Button from "../components/ui/Button/Button";

export default function WorksSection() {
  const link = "https://www.instagram.com/thesurelyhow/";
  const [active, setActive] = useState("default");

  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="works" className={`paddedContent ${styles.worksSection}`}>
      <h1 className={styles.worksTitle}>Explore My Works</h1>

      <WorksTabs active={active} setActive={setActive} />
        
        {active === "Illustrations" && (
          <div className={styles.btn}>
            <Button onClick={handleClick}>Check out more of my art!</Button>
          </div>
        )}

      <div className={styles.worksDisplay}>
        {active === "default" && <h2>Select an option</h2>}

        {active === "Web Development" && <WebProjects />}
        {active === "UI/UX Design" && <ProductDesignProjects/>}
        {active === "Illustrations" && <IllustrationProjects />}
            
      </div>
    </section>
  );
}
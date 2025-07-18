import HomeIntroImage from "../components/HomeIntro/HomeIntroImage";
import HomeIntroText from "../components/HomeIntro/HomeIntroText";
import HomeGreetings from "../components/HomeGreetings";
import styles from "./styles/Home.module.scss";

export default function Home() {
  return (
    <section>
      <HomeGreetings />
      <div className={styles.HomeIntro}>
        <HomeIntroImage />
        <HomeIntroText />
      </div>
      
      <div id="contact">
        <h2>Contact Section</h2>
      </div>
    </section>
  );
}
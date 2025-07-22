import HomeIntroImage from "../components/HomeIntro/HomeIntroImage";
import HomeIntroText from "../components/HomeIntro/HomeIntroText";
import HomeGreetings from "../components/HomeGreetings";
import Contacts from "../components/Contacts";
import styles from "./styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <section>
        <HomeGreetings />

        <div className={styles.HomeIntro}>
          <HomeIntroImage />
          <HomeIntroText />
        </div>
      </section>

      <Contacts />
    </>
  );
}
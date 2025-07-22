import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HomeIntroImage from "../components/HomeIntro/HomeIntroImage";
import HomeIntroText from "../components/HomeIntro/HomeIntroText";
import HomeGreetings from "../components/HomeGreetings";
import Contacts from "../components/Contacts";
import styles from "./styles/Home.module.scss";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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

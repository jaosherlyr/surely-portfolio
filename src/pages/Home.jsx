import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import IntroImage from "../components/Intro/IntroImage.jsx";
import IntroText from "../components/Intro/IntroText.jsx";
import Greetings from "../components/Greetings/Greetings.jsx";
import Contacts from "../components/Contacts/Contacts";
import LogoStudy from '../components/Logo/LogoStudy.jsx';
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
        <Greetings />

        <div className={styles.intro}>
          <IntroImage />
          <IntroText />
        </div>

        <LogoStudy />
      </section>

      <Contacts />
    </>
  );
}

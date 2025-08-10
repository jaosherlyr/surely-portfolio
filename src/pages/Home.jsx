import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import IntroImage from "../components/Intro/IntroImage.jsx";
import IntroText from "../components/Intro/IntroText.jsx";
import Greetings from "../components/Greetings/Greetings.jsx";
import Contacts from "../components/Contacts/Contacts";
import LogoStudy from '../components/Logo/LogoStudy.jsx';
import About from "../components/About/About.jsx";
import styles from "./styles/Home.module.scss";

export default function Home() {
  const location = useLocation();
  const homeRef = useRef(null);

  useEffect(() => {
  if (location.state?.scrollToContact) {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState({}, document.title);
  } else if (location.state?.scrollToAbout) {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState({}, document.title);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [location]);

useEffect(() => {
  console.log('homeRef-', homeRef.current);
}, []);

  return (
    <>
      <section 
        id='home'
        ref = {ref => homeRef.current = ref}
      >
        <Greetings />

        <div className={styles.intro}>
          <IntroImage />
          <IntroText />
        </div>

        <LogoStudy />
      </section>

      <About />
      <Contacts />
    </>
  );
}

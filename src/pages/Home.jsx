import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from "../components/Hero/Hero.jsx";
import Contacts from "../components/Contacts/Contacts";
import LogoStudy from '../components/Logo/LogoStudy.jsx';
import About from "../components/About/About.jsx";
import Intro from '../components/Intro/Intro.jsx';

import styles from "./styles/Home.module.scss";

export default function Home() {
  const location = useLocation();

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

  return (
    <>
      <section id='home' >
        <Hero />
        <Intro />
        <LogoStudy /> 
      </section>

      <About />
      <Contacts />
    </>
  );
}

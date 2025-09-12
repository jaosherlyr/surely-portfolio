import { useLocation } from 'react-router-dom';
import { useScrollSpy } from '../context/ScrollSpyContext';
import useMidpointScrollSpy from '../hooks/useMidpointScrollSpy';
import useRouteScroll from '../hooks/useRouteScroll';

import Hero from "../components/Hero/Hero.jsx";
import Contacts from "../components/Contacts/Contacts";
import LogoStudy from '../components/Logo/LogoStudy.jsx';
import About from "../components/About/About.jsx";
import Intro from '../components/Intro/Intro.jsx';

export default function Home() {
  const location = useLocation();
  const { setActiveSection } = useScrollSpy();

  useRouteScroll(location);
  const spyRootRef = useMidpointScrollSpy(setActiveSection, { headerEm: 5, headerCssVar: '--header-h' });

  return (
    <div ref={spyRootRef}>
      <section id="home">
        <Hero />
        <div className='paddedContent'>
          <Intro />
          <LogoStudy />
        </div>
      </section>
      <About />
      {/* <Contacts /> */}
    </div>
  );
}

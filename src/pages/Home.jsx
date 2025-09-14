import { useLocation } from "react-router-dom";
import { useScrollSpy } from "../context/ScrollSpyContext";
import useMidpointScrollSpy from "../hooks/useMidpointScrollSpy";
import useRouteScroll from "../hooks/useRouteScroll";

import HeroSection from "../components/sections/Home/Hero/HeroSection";
import IntroSection from "../components/sections/Home/Intro/IntroSection";
import LogoStudySection from "../components/sections/Home/LogoStudy/LogoStudySection";
import AboutSection from "../components/sections/Home/About/AboutSection";
import ContactSection from "../components/sections/Home/Contacts/ContactSection";

export default function Home() {
  const location = useLocation();
  const { setActiveSection } = useScrollSpy();

  useRouteScroll(location);
  const spyRootRef = useMidpointScrollSpy(setActiveSection, {
    headerEm: 5,
    headerCssVar: "--header-h",
  });

  return (
    <div ref={spyRootRef}>
      <section id="home">
        <HeroSection />
        <div className="paddedContent">
          <IntroSection />
          <LogoStudySection />
        </div>
      </section>

      <AboutSection />
      <ContactSection />
    </div>
  );
}
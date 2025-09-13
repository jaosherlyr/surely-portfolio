import BackgroundSection from "../Background/BackgroundSection";
import SkillsSection from "../Skills/SkillsSection";

export default function AboutSection() {
  return (
    <section id="about" className="paddedContent">
      <SkillsSection />
      <BackgroundSection />
    </section>
  );
}
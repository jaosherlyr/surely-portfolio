import { useEffect, useState } from "react";

import ProjectCard from "../cards/ProjectCard";

//IMG imports
import wakieHero from "/images/wakie/Wakie-hero.webp";
import wakie1 from "/images/wakie/Wakie-1.webp";
import wakie2 from "/images/wakie/Wakie-2.webp";
import wakie3 from "/images/wakie/Wakie-3.webp";
import wakie4 from "/images/wakie/Wakie-4.webp";
import wakie5 from "/images/wakie/Wakie-5.webp";
import wakie6 from "/images/wakie/Wakie-6.webp";
import wakie7 from "/images/wakie/Wakie-7.webp";
import wakie8 from "/images/wakie/Wakie-8.webp";
import jipHero from "/images/jip/JIP-hero.webp";
import jip1 from "/images/jip/JIP-1.webp";
import jip2 from "/images/jip/JIP-2.webp";
import jip3 from "/images/jip/JIP-3.webp";
import jip4 from "/images/jip/JIP-4.webp";
import jip5 from "/images/jip/JIP-5.webp";
import jip6 from "/images/jip/JIP-6.webp";
import jip7 from "/images/jip/JIP-7.webp";
import witnessHero from "/images/witness/Witness-hero.webp";
import witness1 from "/images/witness/Witness-1.webp";
import witness2 from "/images/witness/Witness-2.webp";
import witness3 from "/images/witness/Witness-3.webp";

export default function ProductDesignProjects() {
  const projects = [
  {
    title: "Wakie-Wakie",
    timeline: "August 2023",
    media: [wakieHero, wakie8, wakie1, wakie2, wakie3, wakie4, wakie5, wakie6, wakie7],
    link: "https://www.figma.com/design/XsLa0qOqM6MYDIh0mzBAxz/Simple-Interactive-website?node-id=0-1&t=lTrixnGLnVTFzxFL-1",
    details:
      "A light-and-dark themed prototype exploring playful clock transitions between analog and digital. Built in Figma, it was a creative exercise that taught me more about interaction and theme design.",
  },
  {
    title: "Jip",
    timeline: "May 2023",
    media: [jipHero, jip1, jip2, jip3, jip4, jip5, jip6, jip7],
    link: "https://www.figma.com/design/rBQR3JBvM2IWhWgPies0Eg/JIP?node-id=3-66&t=FsrgciBkug9YwywQ-1",
    details:
      "A commuter-focused UI/UX design inspired by Cebu jeepney routes. Though still conceptual, it was one of my favorite projects because it addressed a real local challenge.",
  },
  {
    title: "Witness",
    timeline: "May 2024",
    media: [witnessHero, witness1, witness2, witness3],
    link: "https://www.figma.com/design/tgapZupcCdEj0mKLlHBWRP/SoftEng-Final-Project?node-id=65-294&t=653t1zAoLVMr0QSa-1",
    details:
      "I led the Figma prototype for an app that helps reduce Cebu traffic by letting drivers quickly report minor accidents. While it relies on responsible reporting, it showed how tech can ease daily commuting.",
  },
];


  const [expanded, setExpanded] = useState(null);
  const toggle = (i) => setExpanded((prev) => (prev === i ? null : i));

  useEffect(() => {
      if (expanded === null) return;
  
      const handleDocClick = () => setExpanded(null);
      document.addEventListener("click", handleDocClick);
  
      return () => document.removeEventListener("click", handleDocClick);
    }, [expanded]);

  return (
    <>
      {projects.map((p, i) => (
        <ProjectCard
          key={i}
          title={p.title}
          timeline={p.timeline}
          media={p.media}
          link={p.link}
          details={p.details}
          isExpanded={expanded === i}
          isAnyExpanded={expanded !== null}
          onToggle={() => toggle(i)}
        />
      ))}
    </>
  );
}
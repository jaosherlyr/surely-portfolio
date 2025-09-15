import { useState } from "react";

import ProjectCard from "../cards/ProjectCard";

// TEST images
import test1 from "../../assets/_test_/test1.jpg";
import test2 from "../../assets/_test_/test2.jpg";
import test3 from "../../assets/_test_/test3.jpg";
import test4 from "../../assets/_test_/test4.jpg";

//IMG imports
import wakieHero from "../../assets/Images/projects/wakie/Wakie-figmaHero.png";
import wakie1 from "../../assets/Images/projects/wakie/Wakie-1.png";
import wakie2 from "../../assets/Images/projects/wakie/Wakie-2.png";
import wakie3 from "../../assets/Images/projects/wakie/Wakie-3.png";
import wakie4 from "../../assets/Images/projects/wakie/Wakie-4.png";
import wakie5 from "../../assets/Images/projects/wakie/Wakie-5.png";
import wakie6 from "../../assets/Images/projects/wakie/Wakie-6.png";
import wakie7 from "../../assets/Images/projects/wakie/Wakie-7.png";
import wakie8 from "../../assets/Images/projects/wakie/Wakie-8.png";
import jipHero from "../../assets/Images/projects/jip/JIP-hero.png";
import jip1 from "../../assets/Images/projects/jip/JIP-1.png";
import jip2 from "../../assets/Images/projects/jip/JIP-2.png";
import jip3 from "../../assets/Images/projects/jip/JIP-3.png";
import jip4 from "../../assets/Images/projects/jip/JIP-4.png";
import jip5 from "../../assets/Images/projects/jip/JIP-5.png";
import jip6 from "../../assets/Images/projects/jip/JIP-6.png";
import jip7 from "../../assets/Images/projects/jip/JIP-7.png";
import witnessHero from "../../assets/Images/projects/witness/Witness-hero.png";
import witness1 from "../../assets/Images/projects/witness/Witness-1.png";
import witness2 from "../../assets/Images/projects/witness/Witness-2.png";
import witness3 from "../../assets/Images/projects/witness/Witness-3.png";

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
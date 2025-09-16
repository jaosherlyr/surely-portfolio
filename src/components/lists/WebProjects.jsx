import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";

//IMG imports
import panHero from "/images/pan/PAN-hero.webp";
import pan1 from "/images/pan/PAN-1.webp";
import pan2 from "/images/pan/PAN-2.webp";
import pan3 from "/images/pan/PAN-3.webp";
import wakieHero from "/images/wakie/Wakie-hero.webp";
import wakie1 from "/images/wakie/Wakie-1.webp";
import wakie2 from "/images/wakie/Wakie-2.webp";
import wakie3 from "/images/wakie/Wakie-3.webp";
import wakie4 from "/images/wakie/Wakie-4.webp";
import wakie5 from "/images/wakie/Wakie-5.webp";
import wakie6 from "/images/wakie/Wakie-6.webp";
import wakie7 from "/images/wakie/Wakie-7.webp";

export default function WebProjects() {
  const projects = [
  {
    title: "PAN",
    timeline: "November 2022",
    media: [panHero, pan1, pan2, pan3],
    link: "https://github.com/LaplaceXD/Pan",
    details:
      "PAN is a Point-of-Sale system built as a group project for a bakery. I designed the UI/UX in Figma and contributed to the front-end in React.js—my first hands-on React experience that balanced design and coding.",
  },
  {
    title: "Wakie-Wakie",
    timeline: "August 2023",
    media: [wakieHero, wakie1, wakie2, wakie3, wakie4, wakie5, wakie6, wakie7],
    link: "https://github.com/LaplaceXD/WakieWakie",
    details:
      "A paired project: a dating app that matches users by wake-up time. I created the interface and worked on the front-end, while also practicing front-to-back integration. It was a fun way to grow in both design and development.",
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
import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";

import sombiHero from "/images/sombi/Sombi-hero.webp";
import sombi1 from "/images/sombi/Sombi-1.webp";
import sombi2 from "/images/sombi/Sombi-2.webp";
import sombi3 from "/images/sombi/Sombi-3.webp";
import sombi4 from "/images/sombi/Sombi-4.webp";
import robotHero from "/images/robot/Robot-hero.webp";
import robot1 from "/images/robot/Robot-1.webp";
import robot2 from "/images/robot/Robot-2.webp";
import robot3 from "/images/robot/Robot-3.webp";
import robot4 from "/images/robot/Robot-4.webp";
import perlasHero from "/images/perlas/Perlas-hero.webp";
import perlas1 from "/images/perlas/Perlas-1.webp";
import perlas2 from "/images/perlas/Perlas-2.webp";
import perlas3 from "/images/perlas/Perlas-3.webp";
import perlas4 from "/images/perlas/Perlas-4.webp";

export default function IllustrationProjects() {
  const projects = [
  {
    title: "Hala Sombi!",
    timeline: "October 2023 – March 2024",
    media: [sombiHero, sombi1, sombi2, sombi3, sombi4],
    link: "",
    details:
      "My first children’s book illustration. I especially enjoyed the cover and character design, and discovered how much I loved storytelling through art.",
  },
  {
    title: "Beep… Boop… I Am a Robot",
    timeline: "January 2024 – March 2024",
    media: [robotHero, robot1, robot2, robot3, robot4],
    link: "",
    details:
      "A follow-up children’s book commission focused on creating friendly robot characters. It challenged me to explore a new style, and it quickly became a rewarding learning experience.",
  },
  {
    title: "Si Perlas, ang iring sa isla Santa Fe",
    timeline: "April 2024",
    media: [perlasHero, perlas1, perlas2, perlas3, perlas4],
    link: "https://clt1363228.bmeurl.co/11A18D3B",
    details:
      "An academic eBook project in partnership with USC and NCCA. I led the visual design, contributing to a collection of free Cebuano digital books celebrating culture and festivals.",
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
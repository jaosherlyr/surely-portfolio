import { useState } from "react";
import ProjectCard from "../cards/ProjectCard";

import sombiHero from "../../assets/Images/projects/sombi/Sombi-hero.png";
import sombi1 from "../../assets/Images/projects/sombi/Sombi-1.jpg";
import sombi2 from "../../assets/Images/projects/sombi/Sombi-2.png";
import sombi3 from "../../assets/Images/projects/sombi/Sombi-3.jpg";
import sombi4 from "../../assets/Images/projects/sombi/Sombi-4.jpg";
import robotHero from "../../assets/Images/projects/robot/Robot-hero.png";
import robot1 from "../../assets/Images/projects/robot/Robot-1.png";
import robot2 from "../../assets/Images/projects/robot/Robot-2.png";
import robot3 from "../../assets/Images/projects/robot/Robot-3.png";
import robot4 from "../../assets/Images/projects/robot/Robot-4.png";
import perlasHero from "../../assets/Images/projects/perlas/Perlas-hero.png";
import perlas1 from "../../assets/Images/projects/perlas/Perlas-1.png";
import perlas2 from "../../assets/Images/projects/perlas/Perlas-2.png";
import perlas3 from "../../assets/Images/projects/perlas/Perlas-3.png";
import perlas4 from "../../assets/Images/projects/perlas/Perlas-4.png";

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
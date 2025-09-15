import { useState } from "react";
import ProjectCard from "../cards/ProjectCard";

// TEST images
import test1 from "../../assets/_test_/test1.jpg";
import test2 from "../../assets/_test_/test2.jpg";
import test3 from "../../assets/_test_/test3.jpg";
import test4 from "../../assets/_test_/test4.jpg";

//IMG imports
import panHero from "../../assets/Images/projects/pan/PAN-hero.png";
import pan1 from "../../assets/Images/projects/pan/PAN-1.png";
import pan2 from "../../assets/Images/projects/pan/PAN-2.png";
import pan3 from "../../assets/Images/projects/pan/PAN-3.png";
import wakieHero from "../../assets/Images/projects/wakie/Wakie-hero.png";
import wakie1 from "../../assets/Images/projects/wakie/Wakie-1.png";
import wakie2 from "../../assets/Images/projects/wakie/Wakie-2.png";
import wakie3 from "../../assets/Images/projects/wakie/Wakie-3.png";
import wakie4 from "../../assets/Images/projects/wakie/Wakie-4.png";
import wakie5 from "../../assets/Images/projects/wakie/Wakie-5.png";
import wakie6 from "../../assets/Images/projects/wakie/Wakie-6.png";
import wakie7 from "../../assets/Images/projects/wakie/Wakie-7.png";

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
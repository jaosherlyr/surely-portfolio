import { useState } from "react";

import ProjectCard from "../cards/ProjectCard";

// TEST images
import test1 from "../../assets/_test_/test1.jpg";
import test2 from "../../assets/_test_/test2.jpg";
import test3 from "../../assets/_test_/test3.jpg";
import test4 from "../../assets/_test_/test4.jpg";

export default function ProductDesignProjects() {
  const projects = [
  {
    title: "Wakey-Wakey",
    timeline: "August 2023",
    media: [test1, test3],
    link: "",
    details:
      "A light-and-dark themed prototype exploring playful clock transitions between analog and digital. Built in Figma, it was a creative exercise that taught me more about interaction and theme design.",
  },
  {
    title: "Jip",
    timeline: "May 2023",
    media: [test2],
    link: "",
    details:
      "A commuter-focused UI/UX design inspired by Cebu jeepney routes. Though still conceptual, it was one of my favorite projects because it addressed a real local challenge.",
  },
  {
    title: "Witness",
    timeline: "May 2024",
    media: [test4, test1],
    link: "",
    details:
      "A group prototype built in Figma to help drivers report minor traffic incidents faster. I led the UI/UX design and focused on clear, responsible user flows.",
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
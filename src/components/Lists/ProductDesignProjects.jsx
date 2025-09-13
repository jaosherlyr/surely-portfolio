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
        "The prototype for Wakey-Wakey was designed with both light and dark themes...",
    },
    {
      title: "Jip",
      timeline: "May 2023",
      media: [test2],
      link: "",
      details:
        "A UI/UX exploration for a commuter helper app inspired by Cebu jeepney routes...",
    },
    {
      title: "Witness",
      timeline: "May 2024",
      media: [test4, test1],
      link: "",
      details:
        "A traffic-minor-incident reporting concept; I led the Figma prototype...",
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
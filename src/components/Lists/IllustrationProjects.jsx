import { useState } from "react";
import ProjectCard from "../cards/ProjectCard";

// TEST images
import test1 from "../../assets/_test_/test1.jpg";
import test2 from "../../assets/_test_/test2.jpg";
import test3 from "../../assets/_test_/test3.jpg";
import test4 from "../../assets/_test_/test4.jpg";

export default function IllustrationProjects() {
  const projects = [
  {
    title: "Hala Sombi!",
    timeline: "October 2023 – March 2024",
    media: [test1, test3],
    link: "https://web.facebook.com/rjrzperalta/posts/pfbid02HPx...",
    details:
      "My first children’s book illustration. I especially enjoyed the cover and character design, and discovered how much I loved storytelling through art.",
  },
  {
    title: "Beep… Boop… I Am a Robot",
    timeline: "January 2024 – March 2024",
    media: [test2, test4],
    link: "https://web.facebook.com/rjrzperalta/posts/pfbid02HPx...",
    details:
      "A follow-up children’s book commission focused on creating friendly robot characters. It challenged me to explore a new style, and it quickly became a rewarding learning experience.",
  },
  {
    title: "Si Perlas, ang iring sa isla Santa Fe",
    timeline: "April 2024",
    media: [test1, test2, test3, test4],
    link: "https://drive.google.com/file/d/1FxOJjwlr6X2ApG-...",
    details:
      "An academic eBook project in partnership with USC and NCCA. I led the visual design, contributing to a collection of free Cebuano digital books celebrating culture and festivals.",
  },
  {
    title: "Si Perlas, ang iring sa isla Santa Fe",
    timeline: "April 2024",
    media: [test1, test2, test3, test4],
    link: "https://drive.google.com/file/d/1FxOJjwlr6X2ApG-...",
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
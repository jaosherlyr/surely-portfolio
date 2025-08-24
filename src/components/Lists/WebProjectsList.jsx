import { useState } from "react";
import WorkCard from "../Card/WorkCard";

//TEST images
import test1 from '../../assets/test1.jpg';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';

export default function WebProjectsList() {
    const webProjectsData = [
        {
            title: "PAN",
            timeline: "November 2022",
            media: [
                test1,
            ],
            link: "https://github.com/LaplaceXD/Pan",
            details: "Pan was an academic group project, a Point-of-Sale system built for a bakery. I led the design aspect, using Figma to plan the entire UI/UX flow. Alongside that, I contributed to the front-end development, which also became my first experience working with React.js. It was a valuable learning opportunity where I was designing and coding at the same time, gradually improving my skills as I built the project.",
        },
        {
            title: "Wakey-Wakey",
            timeline: "August 2023",
            media: [
                test2,
                test3,
                test4,
            ],
            link: "https://github.com/LaplaceXD/WakieWakie",
            details: "Wakey-Wakey was a paired academic project, a dating app where users get matched with others who wake up at the same time as they do. The app allowed matched users to chat with each other. I designed the UI/UX and contributed to the frontend development, which gave me the chance to strengthen both my design and coding skills in one project. This was also my first hands-on experience integrating backend with frontend.",
        },
        {
            title: "TEST CASE 3",
            timeline: "Month YEAR",
            media: [
                test2,
                test4,
            ],
            link: "",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "TEST CASE 4",
            timeline: "Month YEAR",
            media: [
                test1,
            ],
            link: "",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "TEST CASE 5",
            timeline: "Month YEAR",
            media: [
                test2,
                test3,
                test1,
                test4
            ],
            link: "",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ]
    
    const [expanded, setExpanded] = useState(null);

    const handleToggle = (i) => {
       setExpanded((prev) => (prev === i ? null : i));
    };

    return (
        <>
            {webProjectsData.map((project, i) => (
                <WorkCard 
                    key={i}
                    title={project.title}
                    timeline={project.timeline}
                    media={project.media}
                    link={project.link}
                    details={project.details}
                    isExpanded={expanded === i}
                    isAnyExpanded={expanded !== null}
                    onToggle={() => handleToggle(i)}
                />
            ))}
        </>
    );
}
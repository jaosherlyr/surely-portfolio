import WorkCard from "../Works/WorkCard";

export default function WebProjectsList() {
    const webProjectsData = [
        {
            title: "PAN",
            timeline: "November 2022",
            media: [],
            link: "https://github.com/LaplaceXD/Pan",
            details: "Pan was an academic group project, a Point-of-Sale system built for a bakery. I led the design aspect, using Figma to plan the entire UI/UX flow. Alongside that, I contributed to the front-end development, which also became my first experience working with React.js. It was a valuable learning opportunity where I was designing and coding at the same time, gradually improving my skills as I built the project.",
        },
        {
            title: "Wakey-Wakey",
            timeline: "August 2023",
            media: [],
            link: "https://github.com/LaplaceXD/WakieWakie",
            details: "Wakey-Wakey was a paired academic project, a dating app where users get matched with others who wake up at the same time as they do. The app allowed matched users to chat with each other. I designed the UI/UX and contributed to the frontend development, which gave me the chance to strengthen both my design and coding skills in one project. This was also my first hands-on experience integrating backend with frontend.",
        },
    ]

    return (
        <>
            {webProjectsData.map((project, index) => (
                <WorkCard 
                    key={index}
                    title={project.title}
                    timeline={project.timeline}
                    media={project.media}
                    link={project.link}
                    details={project.details}
                />
            ))}
        </>
    );
}
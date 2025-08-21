import WorkCard from "../Works/WorkCard";

export default function DesignsList() {
    const designsData = [
        {
            title: "Wakey-Wakey",
            timeline: "August 2023",
            media: [],
            link: "",
            details: "The prototype for Wakey-Wakey was designed with both light and dark themes in mind, which I worked on using Figma. I came up with the idea of highlighting a clock as the centerpiece of the main page, allowing it to transition smoothly between analog and digital modes. It was a really fun and engaging project that not only let me explore creative design ideas but also helped me learn and grow in the process.",
        },
        {
            title: "Jip",
            timeline: "May 2023",
            media: [],
            link: "",
            details: "This UI/UX design is one of my favorite projects, inspired by my daily commute in Cebu City. Since I’m not very familiar with all the jeepney routes, I wanted to create something that would’ve been really helpful for commuters like me. One of the main challenges is that there’s no official record of the jeepney routes, and they often change over time. Despite that, it’s still a project I’d love to revisit and develop further in the future.",
        },
        {
            title: "Witness",
            timeline: "May 2024",
            media: [],
            link: "",
            details: "This was a group project where I led the creation of the prototype using Figma. The app was meant to address the problem of how even minor traffic incidents can cause major congestion in Cebu. Often, small accidents with no injuries can lead to long delays while everyone waits for traffic enforcers to arrive. Our idea was to give drivers the ability to quickly report such minor incidents through the app, helping reduce unnecessary traffic buildup. Of course, this concept would require responsible user reporting to work effectively, but it was an interesting exploration of how technology could ease everyday commuting challenges.",

        },
    ]

    return (
        <>
            {designsData.map((project, index) => (
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
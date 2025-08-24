import { useState } from "react";
import WorkCard from "../Card/WorkCard";

//TEST images
import test1 from '../../assets/test1.jpg';
import test2 from '../../assets/test2.jpg';
import test3 from '../../assets/test3.jpg';
import test4 from '../../assets/test4.jpg';

export default function IllustrationsList() {
    const illustrationsData = [
        {
            title: "Hala Sombi!",
            timeline: "October 2023 - March 2024",
            media: [
                test1,
                test3,
            ],
            link: "https://web.facebook.com/rjrzperalta/posts/pfbid02HPxnz2RgS2qCwRn68ePBm4H6MBmWBUCWbUyW29DN8PpPqMcKHSxejbhf52z1KF7sl",
            details: "This was my first experience illustrating a children’s book. At first, I took on the project simply as a way to earn some extra income, but I was pleasantly surprised by how much I enjoyed the process. The story follows a lively child who eventually falls asleep after playing without cleaning up his toys and the . I especially loved working on the cover art and character design.",
        },
        {
            title: "Beep… Boop… I am a Robot",
            timeline: "January 2024 - March 2024",
            media: [
                test2,
                test4,
            ],
            link: "https://web.facebook.com/rjrzperalta/posts/pfbid02HPxnz2RgS2qCwRn68ePBm4H6MBmWBUCWbUyW29DN8PpPqMcKHSxejbhf52z1KF7sl",
            details: "This was the second children’s book I illustrated, commissioned by the same client as Hala Sombi. Unlike the first project, this one was a unique challenge for me since I had no prior experience drawing robots, especially ones that needed to look cute and approachable for children. I went through several iterations of character designs, experimenting with different looks and color schemes, before finalizing a design that was approved. It was a great learning experience, and I really enjoyed pushing myself outside of my usual style.",
        },
        {
            title: "Si Perlas, and iring sa isla Santa Fe (Perlas, the cat in the island of Santa Fe)",
            timeline: "April 2024",
            media: [
                test1,
                test2,
                test3,
                test4
            ],
            link: "https://drive.google.com/file/d/1FxOJjwlr6X2ApG-v9OpS1ZVMJ4HR1c_W/view",
            details: "This was a group academic project where I took the lead in the design aspect, being the more artistic member of the team. We created an eBook as part of a partnership between the University of San Carlos (USC) and the National Commission for Culture and the Arts (NCCA). Thanks to this collaboration, our work became part of the Taga Sugbo Ako Digital Children’s Books on Cebuano Festivals, a collection of free digital books. It was a meaningful project that combined creativity, culture, and teamwork.",

        },
    ]

    const [expanded, setExpanded] = useState(null);
    
        const handleToggle = (i) => {
           setExpanded((prev) => (prev === i ? null : i));
        };

    return (
        <>
            {illustrationsData.map((project, i) => (
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
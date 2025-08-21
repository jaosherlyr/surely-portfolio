import BackgroundCard from "../Card/BackgroundCard";

export default function BackgroundList() {
    const backgroundData = [
        {
            title: "Web Development, SEO, and Digital Marketing Intern",
            timeline: "October 2024 - December 2024",
            type: "experience",
            employment: "Remote WorkX Consulting",
            details: "My first internship opportunity, where I was able to learn how to work with WordPress and gain hands-on experience in SEO optimization. I also dabbled in digital marketing, where I created product posters and produced year-end videos. Although it was a short experience, it was very rewarding and gave me a good taste of working in a professional environment."
        },
        {
            title: "Children’s Book Illustrator",
            timeline: "August 2023 - April 2024",
            type: "experience",
            employment: "Rolando Jr. Z. Peralta",
            details: "I was commissioned to design and illustrate two children’s storybooks that were officially used as part of a school program. The first book is titled Hala Sombi and the second is Beep… Boop… I Am a Robot. Both books have since been published and are ISBN-registered, making them officially part of the Philippine library system. It was an exciting and meaningful project that allowed me to bring stories to life for young readers."
        },
        {
            title: "DOST Scholar Recipient",
            timeline: "2021 - present",
            type: "achievement",
            details: "I feel very fortunate that STEC was proactive in guiding its graduating SHS students to apply for the DOST Scholarship, especially during the challenges brought by COVID. With their support, I was able to apply successfully, and being one of the qualified scholars has truly been a blessing."
        },
        {
            title: "TOPCIT Level 2",
            timeline: "July 2025",
            type: "achievement",
            details: "I had the opportunity to take the TOPCIT exam through USC, where I achieved Level 2. I plan to retake the exam in the future to show my growth and aim for a higher level."
        },
    ]
    
    return (
        <>
            {backgroundData.map((background, index) => (
                <BackgroundCard 
                    key={index}
                    title={background.title}
                    type={background.type}
                    timeline={background.timeline}
                    employment={background.employment}
                    details={background.details}
                />
            ))}
        </>
    );
}
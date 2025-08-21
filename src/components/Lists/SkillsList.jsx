import SkillCard from "../Card/SkillCard";

export default function SkillsList() {
    const skillData = [
        {
            title: "Illustration & Visual Design",
            description: "I’ve always been artistic from a young age, exploring both traditional and digital illustration, as well as branding and applied design. Over the years, I naturally became the go-to artist and designer in group projects, which gave me countless opportunities to refine my skills. What started as a passion has since grown into a strength I’ve carried into professional work, even allowing me to earn through freelance projects along the way.",
            list: [
                "Digital Art",
                "Traditional Art",
                "Character Design",
                "Children’s Storybook Illustration",
                "Poster",
                "Branding",
                "Merchandise Art",
                "Tattoo Design",
            ],
        },
        {
            title: "UI/UX & Game Design",
            description: "As I pursue my Computer Science degree, I’ve had many opportunities to combine my technical skills with my passion for art and design. Often serving as the designated artist in group projects, I’ve taken the lead in shaping the visual and creative aspects of our work. Beyond website designs, I’ve also explored game animation and design, most notably through a school project in 2019, which allowed me to bring storytelling and interactivity into my creative process.",
            list: [
                "Wireframing",
                "Prototyping",
                "Figma",
                "Pixel Art",
                "Sprite Animation",
                "UI/UX Design",
                "Mobile UI Design",
            ],
        },
        {
            title: "Programming & Web Development",
            description: "My father is a Senior Web Developer, and his work really inspired me. Like him, I focus on front-end development, where I love bringing designs to life and making things easy to use. I’m also eager to learn back-end development to grow my skills even further. In school, I’ve built a solid foundation with C and Data Structures & Algorithms, which really helped my problem-solving. I pick things up quickly, stay consistent with my academics, and I’m always among the passers in my classes.",
            list: [
                "HTML",
                "CSS",
                "SCSS",
                "JavaScript",
                "Tailwind",
                "SEO",
                "Wordpress",
                "React JS",
                "C",
                "Python",
                "DSA",
            ],
        },
        {
            title: "Creativity & Productivity Tools",
            description: "Most of my skills are self-taught. Since I didn’t have the money to take professional training programs, I turned to free tutorials and hands-on experimentation with different online tools. This not only helped me learn at my own pace, but also gave me the confidence to explore, practice, and apply what I learned in real projects. I believe this resourcefulness has been one of my strengths, it pushed me to keep learning, even without formal training.",
            list: [
                "Figma",
                "Canva",
                "Adobe Illustrator",
                "Krita",
                "Medibang Art",
                "Microsoft Office",
                "Visual Studio Code",
                "Github",
                "Slack",
            ],
        },
    ]

    return (
        <>
            {skillData.map((skill, index) => (
                <SkillCard
                    key={index}
                    title={skill.title}
                    description={skill.description}
                    list={skill.list}
                />
            ))}
        </>
    );
}
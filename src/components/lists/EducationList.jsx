import BackgroundCard from "../cards/BackgroundCard";

export default function EducationList() {
    const educationData = [
        {
            title: "Bachelor of Science in Computer Science",
            timeline: "2021 - present",
            school: "University of San Carlos",
            type: "education",
            link: "https://usc.edu.ph/",
            details: [
                "Consistent Dean’s Lister",
                "DOST Scholar Recipient",
            ],
        },
        {
            title: "Senior High School",
            timeline: "2019 - 2021",
            school: "Science and Technology Education Center",
            type: "education",
            link: "https://sites.google.com/view/stecshs/",
            details: [
                "Kampilan Main Designer",
                "Graduated with Honors"
            ],
        },
        {
            title: "Junior High School",
            timeline: "2015 - 2019",
            school: "University of Cebu - Lapu-Lapu and Mandaue",
            type: "education",
            link: "https://www.universityofcebu.net/p/university-of-cebu-lapu-lapu-and.html",
            details: [
                "Graduated with Honors"
            ],
        },
        {
            title: "Basic Education",
            timeline: "2008 - 2015",
            school: "Lapu-Lapu City Central Elementary School",
            type: "education",
            link: "https://web.facebook.com/p/Lapu-Lapu-City-Central-Elementary-School-100067551390662/?_rdc=1&_rdr#",
            details: [
                "Consistent FL/GL (advanced class) student"
            ],
        },
    ]

    return (
        <>
            {educationData.map((education, index) => (
                <BackgroundCard
                    key={index}
                    title={education.title}
                    timeline={education.timeline}
                    school={education.school}
                    link={education.link}
                    type={education.type}
                    details={education.details}
                />
            ))}
        </>
    );
}
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import ContactCard from "./ContactCard";

export default function ContactList() {
    const contactData = [
        {
            label: "Phone Number",
            value: "+63 922 496 9029",
            type: "info",
        },
        {
            label: "Email Address",
            value: "jaosherlyr@gmail.com",
            type: "info",
        },
        {
            label: "Facebook",
            icon: <IoLogoFacebook />,
            link: "https://web.facebook.com/surely.how",
            type: "socials",
        },
        {
            label: "Instagram",
            icon: <IoLogoInstagram />,
            link: "https://www.instagram.com/thesurelyhow/",
            type: "socials",
        },
        {
            label: "Linkedin",
            icon: <IoLogoLinkedin />,
            link: "https://www.linkedin.com/in/sherly-jao-46a720215/",
            type: "socials",
        },
        {
            label: "GitHub",
            icon: <IoLogoGithub />,
            link: "https://github.com/jaosherlyr",
            type: "socials",
        },
    ]

    return (
        <>
            {contactData.map((contact, index) => (
                <ContactCard 
                    key={index}
                    label={contact.label}
                    value={contact.value}
                    icon={contact.icon}
                    link={contact.link}
                    type={contact.type}
                />
            ))}
        </>
    );
}
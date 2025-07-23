import { useState } from "react";
import { IoCall, IoMail, IoLogoGithub, IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

import ContactItem from "./ContactItem";
import styles from "./styles/Contacts.module.scss";

export default function Contacts() {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
        })
    }

    const contacts = [
        {   
            id: "number",
            icon: <IoCall />,
            label: "Phone Number:",
            value: "+63 922 496 9029",
            copy: true
        },
        {
            id: "email",
            icon: <IoMail />,
            label: "Email:",
            value: "jaosherlyr@gmail.com",
            copy: true
        },
        {
            id: "github",
            icon: <IoLogoGithub />,
            label: "Github",
            link: "https://github.com/jaosherlyr",
        },
        {
            id: "linkedin",
            icon: <IoLogoLinkedin />,
            label: "Linkedin",
            link: "https://www.linkedin.com/in/sherly-jao-46a720215/",
        },
        {
            id: "facebook",
            icon: <IoLogoFacebook />,
            label: "Facebook",
            link: "https://www.facebook.com/sherly.jao/",
        },
        {
            id: "instagram",
            icon: <IoLogoInstagram/>,
            label: "Instagram",
            link: "https://www.instagram.com/thesurelyhow/",
        },
    ]

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactIntro}>
                <span className={styles.contactHeading}>Drop me a line!</span>
                <span className={styles.contactSubHeading}>Don't be shy, say Hi!</span>
            </div>

            <div className={styles.contactItems}>
                {contacts.map((contact) => (
                    <ContactItem
                        key={contact.id}
                        contactIcon={contact.icon}
                        label={contact.label}
                        value={contact.value}
                        link={contact.link}
                        onCopy={
                            contact.copy ? () => handleCopy(contact.value) : null
                        }
                    />
                ))}
            </div>
        </section>
    );
}
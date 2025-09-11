import { useSelector } from "react-redux";

import ContactList from "../Lists/ContactList";
import contactHand from '../../assets/contactHand.png';
import styles from './Contacts.module.scss';

export default function Contacts() {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <section id="contact" className={`paddedContent ${styles.contactSection}`}>
            <div className={styles.contactLeft}>
                <img className={styles.contactHand} src={contactHand} alt="Contact Section - Hand with Paper Airplane" />
            </div>

            <div className={styles.contactRight}>
                <h1>I'd love to connect!</h1>
                <h2 className={`${styles.contactSubtitle} ${theme === 'dark' ? styles.dark : ''}`}>Send me a hey!</h2>

                <div className={styles.contactListContainer}>
                    <ContactList />
                </div>
            </div>
        </section>
    );
}
import ContactList from "../Lists/ContactList";

import styles from './Contacts.module.scss';

export default function Contacts() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.contactLeft}>
                <h1>Hand</h1>
            </div>

            <div className={styles.contactRight}>
                <h1>I'd love to connect!</h1>
                <h2>Send me a hey!</h2>

                <div className={styles.contactListContainer}>
                    <ContactList />
                </div>
            </div>
        </section>
    );
}
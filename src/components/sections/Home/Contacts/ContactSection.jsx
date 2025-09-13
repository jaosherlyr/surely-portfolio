import { useSelector } from "react-redux";

import ContactList from '../../../lists/ContactList'
import contactHand from "../../../../assets/Images/contactHand.png";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section id="contact" className={`paddedContent ${styles.section}`}>
      <div className={styles.left}>
        <img
          className={styles.hand}
          src={contactHand}
          alt="Contact Section - Hand with Paper Airplane"
        />
      </div>

      <div className={styles.right}>
        <h1>I&apos;d love to connect!</h1>
        <h2 className={`${styles.subtitle} ${theme === "dark" ? styles.dark : ""}`}>
          Send me a hey!
        </h2>

        <div className={styles.list}>
          <ContactList />
        </div>
      </div>
    </section>
  );
}
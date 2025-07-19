import greetings from "../assets/HomeGreetings.png";
import hand from "../assets/greetingHand.png";
import styles from "./styles/HomeGreetings.module.scss";

export default function HomeGreetings() {
    return (
        <div className={styles.HomeGreetings}>
            <img src={greetings} alt="" className={styles.greeting} />
            <img src={hand} alt="" className={styles.hand} />
        </div>
    );
}
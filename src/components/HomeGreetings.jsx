import greetings from "../assets/HomeGreetings.png";
import styles from "./styles/HomeGreetings.module.scss";

export default function HomeGreetings() {
    return (
        <div className={styles.HomeGreetings}>
            <img src={greetings} alt="" className={styles.greeting} />
        </div>
    );
}
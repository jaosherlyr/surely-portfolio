import hand from "../assets/greetingHand.png";
import styles from "./styles/HomeGreetings.module.scss";

export default function HomeGreetings() {
  const handleContextMenu = (e) => e.preventDefault();

  return (
    <div className={styles.HomeGreetings} onContextMenu={handleContextMenu}>
      <img src={hand} alt="" className={styles.hand} />
    </div>
  );
}

import hand from "../../assets/greetingHand.png";
import styles from "./HomeGreetings.module.scss";

export default function HomeGreetings() {
  const handleContextMenu = (e) => e.preventDefault();

  return (
    <div className={styles.homeGreetings} onContextMenu={handleContextMenu}>
      <img src={hand} alt="" className={styles.hand} />
    </div>
  );
}

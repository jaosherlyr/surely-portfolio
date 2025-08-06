import hand from "../../assets/greetingHand.png";
import hello from "../../assets/HomeGreetings.png";
import styles from "./Greetings.module.scss";

export default function HomeGreetings() {
  const handleContextMenu = (e) => e.preventDefault();

  return (
    <div className={styles.homeGreetings} onContextMenu={handleContextMenu}>
      <img src={hello} alt="" className={styles.hello} />
        <div className={styles.greetingTxt}>
          <h1>Hi! I'm Sherly. <br /> 
          I'm a web developer and artist based in the Philippines.</h1>
        </div>

      <img src={hand} alt="" className={styles.hand} />
    </div>
  );
}

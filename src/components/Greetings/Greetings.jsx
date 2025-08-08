import { useSelector } from 'react-redux';

import hand from "../../assets/hand.png";
import bannerLight from "../../assets/helloBanner-light.png";
import bannerDark from "../../assets/helloBanner-dark.png";
import styles from "./Greetings.module.scss";

export default function Greetings() {
  const handleContextMenu = (e) => e.preventDefault();
  const theme = useSelector((state) => state.theme.mode);
  const banner = theme === "dark" ? bannerDark : bannerLight;

  return (
    <div className={styles.homeGreetings} onContextMenu={handleContextMenu}>
      <div className={styles.leftContainerGreetings}>
        <img src={banner} alt="" className={styles.hello} />

        <div className={styles.greetingTxt}>
          <h1 className={styles.typewriter}>Hi! I'm Sherly.</h1>
          <h1>I'm a web developer and artist based in the Philippines.</h1>
        </div>
      </div>

      <img src={hand} alt="" className={styles.hand} />
    </div>
  );
}

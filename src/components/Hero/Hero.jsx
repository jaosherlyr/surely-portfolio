import { useSelector } from 'react-redux';

//import Images
import greetingsDark from '../../assets/greetings-dark.png';
import greetingsLight from '../../assets/greetings-light.png';
import heroHand from '../../assets/heroHand.png'

import styles from "./Hero.module.scss";

export default function Hero() {
  const theme = useSelector((state) => state.theme.mode);
  const greetings = theme === 'dark' ? greetingsDark : greetingsLight;

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroLeft}>
        <img className={styles.greetings} src={greetings} alt="Hero Section - Hello Greeting" />

        <div className={styles.heroDetails}>
          <h1 className={styles.name}>Hi! I'm Sherly.</h1>
          <h1>I'm a Web Developer and Artist Based in the Philippines</h1>
        </div>
      </div>

      <div className={styles.heroRight}>
        <img className={styles.heroHand} src={heroHand} alt="Hero Section - Hand with Pen Stylus" />
      </div>
    </div>
  );
}

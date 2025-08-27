import { useSelector } from 'react-redux';

//import Images
import greetingsDark from '../../assets/greetings-Dark-final.gif';
import greetingsLight from '../../assets/greetings-Light-final.gif';
import heroHand from '../../assets/heroHand.png'
import Loader from '../Loading/Loader';

import styles from "./Hero.module.scss";
import { useEffect, useMemo, useState } from 'react';

export default function Hero() {
  const theme = useSelector((state) => state.theme.mode);
  const greetings = theme === 'dark' ? greetingsDark : greetingsLight;

  const [imgLoaded, setImgLoaded] = useState(false);
  const imgKey = useMemo(() => `${theme}-greetings`, [theme]);

  useEffect(() => {
    setImgLoaded(false);
  }, [greetings]);

  return (
    <div className={`${theme === 'dark' ? styles.dark : ''} ${styles.heroSection}`}>
      <div className={styles.heroLeft}>
        <div className={styles.heroGreeting}>
          {!imgLoaded && <Loader />}
          
          <img 
            key={imgKey}
            className={styles.greetings} 
            src={greetings} 
            alt="Hero Section - Hello Greeting"
            onLoad={() => setImgLoaded(true)} 
          />
        </div>

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

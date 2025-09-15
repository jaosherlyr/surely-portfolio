import { useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";

import greetingsDark from "../../../../assets/gif/greetings-Dark-final.gif";
import greetingsLight from "../../../../assets/gif/greetings-Light-final.gif";
import heroHand from "../../../../assets/Images/hand/heroHand.png";
import Loader from "../../../ui/Loader/Loader";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const theme = useSelector((s) => s.theme.mode);
  const greetings = theme === "dark" ? greetingsDark : greetingsLight;

  const [imgLoaded, setImgLoaded] = useState(false);
  const imgKey = useMemo(() => `${theme}-greetings`, [theme]);
  const imgRef = useRef(null);

  useEffect(() => { setImgLoaded(false); }, [greetings]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setImgLoaded(true);
  }, [greetings, imgKey]);

  return (
    <section className={`${styles.heroSection} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.left}>
        <div className={styles.greeting}>
          {!imgLoaded && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
          <img
            key={imgKey}
            ref={imgRef}
            className={styles.greetings}
            src={greetings}
            alt="Hello Greeting"
            onLoad={() => setImgLoaded(true)}
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.name}>Hi! I&apos;m Sherly.</h1>
          <h1>I&apos;m a Web Developer and Artist based in the Philippines</h1>
        </div>
      </div>

      <div className={styles.right}>
        <img className={styles.hand} src={heroHand} alt="Hand with pen stylus" />
      </div>
    </section>
  );
}
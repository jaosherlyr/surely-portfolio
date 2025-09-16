import { useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";

import heroHand from "../../../../assets/Images/hand/heroHand.png";
import Loader from "../../../ui/Loader/Loader";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const theme = useSelector((s) => s.theme.mode);

  const greetingsWebm =
    theme === "dark" ? "/videos/greetings-dark.webm" : "/videos/greetings-light.webm";
  const greetingsMp4 =
    theme === "dark" ? "/videos/greetings-dark.mp4"  : "/videos/greetings-light.mp4";

  const [isReady, setIsReady] = useState(false);
  const key = useMemo(() => `${theme}-greetings-video`, [theme]);

  const videoRef = useRef(null);
  const loopTimeoutRef = useRef(null);

  // reset loader on source change
  useEffect(() => { setIsReady(false); }, [greetingsWebm, greetingsMp4]);

  // loading / readiness handlers
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onCanPlay = () => setIsReady(true);
    const onLoadedData = () => setIsReady(true);
    const onError = () => setIsReady(true);

    v.addEventListener("canplay", onCanPlay, { once: true });
    v.addEventListener("loadeddata", onLoadedData, { once: true });
    v.addEventListener("error", onError, { once: true });

    if (v.readyState >= 2) setIsReady(true);

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("loadeddata", onLoadedData);
      v.removeEventListener("error", onError);
    };
  }, [key]);

  // delay between loops: 60s after each end
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const scheduleReplay = () => {
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => { /* ignore autoplay block */ });
      }, 60_000); // 1 minute
    };

    v.addEventListener("ended", scheduleReplay);

    return () => {
      v.removeEventListener("ended", scheduleReplay);
      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
        loopTimeoutRef.current = null;
      }
    };
  }, [key]);

  return (
    <section className={`${styles.heroSection} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.left}>
        <div className={styles.greeting}>
          {!isReady && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}

          <video
            key={key}
            ref={videoRef}
            className={styles.greetings}
            autoPlay       
            muted
            playsInline
            preload="metadata"
            aria-label="Hello Greeting animation"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            <source src={greetingsWebm} type="video/webm" />
            <source src={greetingsMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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

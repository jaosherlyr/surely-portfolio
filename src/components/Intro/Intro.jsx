import IntroImage from "./IntroImage";
import IntroText from "./IntroText";

import styles from './Intro.module.scss';

export default function Intro() {
    return (
        <div className={styles.introSection}>
            <IntroImage />
            <IntroText />
        </div>
    );
}
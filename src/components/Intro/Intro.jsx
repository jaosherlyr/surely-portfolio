import IntroImage from "./IntroImage";
import IntroText from "./IntroText";

import styles from './Intro.module.scss';
import { useSelector } from "react-redux";

export default function Intro() {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <div className={`${theme === 'dark' ? styles.dark : ''} ${styles.introSection}`}>
            <IntroImage />
            <IntroText />
        </div>
    );
}
import { useSelector } from 'react-redux';

import styles from '../styles/HomeIntroText.module.scss';

export default function HomeIntroText() {
    const theme = useSelector((state) => state.theme.mode);
    const textTheme = theme === 'dark' ? styles.dark : '';

    return (
        <div className={`${styles.introText} ${textTheme}`}>
            <p className={`${styles.introHeading} ${textTheme}`}>
                <span className={`${styles.greeting} whitespace-nowrap`}>Hi! I am</span>
                <span className={`${styles.name} ${textTheme} whitespace-nowrap`}>
                    Sherly R. Jao
                </span>
            </p>

            <p className={`${styles.introSubheading} ${textTheme} whitespace-nowrap`}>
                Artist | Web Developer & Designer
            </p>

            <p className={`${styles.text} ${textTheme} whitespace-nowrap`}>
                I code and I draw, and I'm from the 
                <strong>
                    Philippines 🇵🇭
                </strong> 

                <br/>
                Just trying my best to navigate life with the skills I have.
            </p>
        </div>
    );
}
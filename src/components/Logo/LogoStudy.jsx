import { useSelector } from 'react-redux';

import lightStudy from '../../assets/logoStudy-light.png';
import darkStudy from '../../assets/logoStudy-dark.png';
import styles from './LogoStudy.module.scss';

export default function LogoInfo() {
    const theme = useSelector((state) => state.theme.mode);
    const logoStudyImg = theme === 'dark' ? darkStudy : lightStudy;

    return (
        <div className={styles.logoInfo}>
            <div>
                <h1>Where Identity meets Design</h1>
                <h3>The logo is a reflection of my identity, my culture, and my creativity.</h3>
                <h3>I incorporated the Baybayin character for the letter “S,” our precolonial writing script in the Philippines, with the modern letter “S” to represent my name.</h3>
            </div>
            <img src={logoStudyImg} alt="Logo Study Image" className={styles.logoStudy} />
        </div>
    );
}
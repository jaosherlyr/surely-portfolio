import { useSelector } from 'react-redux';

import lightStudy from '../../assets/logo-lightstudy.png';
import darkStudy from '../../assets/logo-darkstudy.png';
import styles from './LogoInfo.module.scss';

export default function LogoInfo() {
    const theme = useSelector((state) => state.theme.mode);
    const logoStudy = theme === 'dark' ? darkStudy : lightStudy;

    return (
        <div className={styles.logoStudy}>
            <div className={styles.Heading}>
                Where Identity Meets Design
            </div>
            <div className={styles.text}>
                <p>I've always wanted a personal logo. Something that would represent who I am. 
                    A mark that wasn't just aesthetic, but also meaningful. 
                    I wanted a logo that felt like me—rooted in both my personal identity and cultural heritage."</p>
                <p>As a proud Filipino, I turned to Baybayin, our ancient writing script, for inspiration. 
                    I discovered that the Baybayin symbol for the letter “S” could seamlessly intertwine with the modern letter “S” from my name. <br />
                    This fusion became the foundation of my logo—an elegant blend of tradition and personal signature.</p>
                <p>My logo isn’t just a visual. It’s a quiet tribute to my roots, my name, and my story. It’s a statement that says:
                    I know where I came from, and I carry it proudly into everything I create."</p>
            </div>
            <img src={logoStudy} alt="Logo Study Image" className={styles.logoImg} />
        </div>
    );
}
import { useSelector } from 'react-redux';

import lightStudy from '../../assets/logo-lightstudy.png';
import darkStudy from '../../assets/logo-darkstudy.png';
import styles from './LogoStudy.module.scss';

export default function LogoInfo() {
    const theme = useSelector((state) => state.theme.mode);
    const logoStudyImg = theme === 'dark' ? darkStudy : lightStudy;

    return (
        <div className={styles.logoInfo}>
            <div className={styles.infoText}>
                <div className="heading">
                    Where <span className="heading-secondary">Identity</span> Meets <span>Design</span>
                </div>

                <div className={styles.infoStudy}>
                    <p>I've always wanted a personal logo. Something that would represent who I am.  <br/>
                        I wanted a logo that felt like me—rooted in both my personal identity and cultural heritage.</p>
                
                    <p>My logo isn’t just a visual. It’s a quiet tribute to my roots, my name, and my story. It’s a statement that says:
                        I know where I came from, and I carry it proudly into everything I create"</p>
                </div>
            </div>

            <img src={logoStudyImg} alt="Logo Study Image" className={styles.logoStudy} />

            <div className={styles.infoText}>
                <p>
                    As a Filipino, I learned Baybayin, our pre-colonial writing script, as a way to reconnect with my roots.
                    Incorporating it into my logo was a natural choice. 
                </p>

                <div className={`heading ${styles.symbols}`}>"ᜐ" + "S"</div>

                <p>
                    The Baybayin character for the letter 'S' aligned beautifully with the modern 'S' from my name. <br/>
                    This fusion became the foundation of my logo—an elegant blend of cultural identity and personal mark.
                </p>
            </div>
        </div>
    );
}
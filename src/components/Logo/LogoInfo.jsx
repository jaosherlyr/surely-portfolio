import { useSelector } from 'react-redux';

import lightStudy from '../../assets/logo-lightstudy.png';
import darkStudy from '../../assets/logo-darkstudy.png';
import styles from './LogoInfo.module.scss';

export default function LogoInfo() {
    const theme = useSelector((state) => state.theme.mode);
    const logoStudy = theme === 'dark' ? darkStudy : lightStudy;

    return (
        <div className={styles.logoStudy}>
            <div>
                lorem ipsum
            </div>
            <img src={logoStudy} alt="Logo Study Image" className={styles.logoImg} />
        </div>
    );
}
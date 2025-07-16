import { useSelector } from 'react-redux';

import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';
import styles from './styles/Logo.module.scss';

export default function Logo() {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <div className={styles.logo}>
            <img src={`${theme === 'dark' ? logoDark : logoLight}`} alt="Logo" />
            <span className={`${theme === 'dark' ? styles.dark : ''}`}>JAO</span>
        </div>
    );
}
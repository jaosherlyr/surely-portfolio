import { useSelector } from 'react-redux';

import Logo from './Logo';
import NavBar from './NavBar';
import styles from './styles/Header.module.scss';

export default function Header() {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
        <Logo />
        <NavBar />
        </header>
  );
}
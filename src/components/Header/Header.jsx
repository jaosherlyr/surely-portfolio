import { useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import NavBar from '../Navigation/NavBar';
import styles from './Header.module.scss';

export default function Header({ onOpenSidebar }) {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
            <Logo />
            <NavBar onOpenSidebar={onOpenSidebar}/>
        </header>
  );
}
import { useSelector } from 'react-redux';

import Logo from '../Logo/HeaderLogo';
import NavBar from '../Navigation/NavBar';
import styles from './Header.module.scss';

export default function Header({ onOpenSidebar, hidden }) {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''} ${hidden ? styles.hidden : ''}`}>
            <Logo hidden={hidden}/>
            <NavBar onOpenSidebar={onOpenSidebar} hidden={hidden}/>
        </header>
  );
}
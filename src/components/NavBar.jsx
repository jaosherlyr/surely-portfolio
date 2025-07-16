import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMenu } from "react-icons/io5";

import ThemeIcon from './ThemeIcon';
import styles from './styles/NavBar.module.scss';

export default function NavBar() {
  const theme = useSelector((state) => state.theme.mode);
  const linkTheme = theme === 'dark' ? styles.dark : '';

  return (
    <>
        <nav className={styles.navbar}>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                `${linkTheme} ${isActive ? styles.active : ''}`
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/works"
                className={({ isActive }) =>
                `${linkTheme} ${isActive ? styles.active : ''}`
                }
            >
                Works
            </NavLink>

            <Link
                href="/#contact"
                className={linkTheme}
            >
                Contact
            </Link>

            <ThemeIcon />
        </nav>
        <IoMenu className={styles.menuIcon} />
    </>
  );
}
import { IoMenu } from "react-icons/io5";

import ThemeIcon from './ThemeIcon';
import NavLinks from './NavLinks';
import styles from './styles/NavBar.module.scss';

export default function NavBar({ onOpenSidebar }) {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLinks />
        <ThemeIcon />
      </nav>

      <IoMenu
        className={styles.menuIcon}
        onClick={onOpenSidebar}
      />
    </>
  );
}
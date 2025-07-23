import { IoMenu } from "react-icons/io5";

import ThemeIcon from '../Theme/ThemeIcon';
import NavLinks from './NavLinks';
import styles from './NavBar.module.scss';

export default function NavBar({ onOpenSidebar }) {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLinks />
        <ThemeIcon />
      </nav>

      <div className={styles.menuIcon}>
        <IoMenu
          className="icon"
          onClick={onOpenSidebar}
        />
      </div>
    </>
  );
}
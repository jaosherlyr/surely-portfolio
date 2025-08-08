import { IoMenu } from "react-icons/io5";

import ThemeIcon from '../Theme/ThemeIcon';
import NavLinks from './NavLinks';
import styles from './NavBar.module.scss';

export default function NavBar({ onOpenSidebar, hidden }) {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLinks />
        <ThemeIcon />
      </nav>

      <div className={`${styles.menuIcon} ${hidden ? styles.hidden : ''}`}>
        <IoMenu
          className="icon"
          onClick={onOpenSidebar}
        />
      </div>
    </>
  );
}
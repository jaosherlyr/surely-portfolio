import HeaderIcon from '../Header/HeaderIcon';
import NavLinks from './NavLinks';
import styles from './styles/NavBar.module.scss';

export default function NavBar({ onOpenSidebar, hidden }) {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLinks />
        <HeaderIcon type="theme"/>
      </nav>

      <div className={`${styles.menuIcon} ${hidden ? styles.hidden : ''}`}>
        <HeaderIcon type="menu" onClick={onOpenSidebar} />
      </div>
    </>
  );
}
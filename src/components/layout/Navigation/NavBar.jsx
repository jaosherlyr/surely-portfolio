import HeaderAction from "../Header/HeaderAction";
import NavMenu from "./NavMenu";
import styles from "./styles/NavBar.module.scss";

export default function NavBar({ onOpenSidebar, hidden }) {
  return (
    <>
      <nav className={styles.bar}>
        <NavMenu />
        <HeaderAction type="theme" />
      </nav>

      {/* Menu button for Sidebar */}
      <div className={`${styles.menu} ${hidden ? styles.hidden : ""}`}>
        <HeaderAction type="menu" onClick={onOpenSidebar} />
      </div>
    </>
  );
}

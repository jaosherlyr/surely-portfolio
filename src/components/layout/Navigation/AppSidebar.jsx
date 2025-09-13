import { useSelector } from "react-redux";

import NavMenu from "./NavMenu";
import HeaderAction from "../Header/HeaderAction";
import styles from "./styles/AppSidebar.module.scss";

export default function AppSidebar({ open, onClose }) {
  if (!open) return null;

  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <aside className={`${styles.panel} ${theme === "dark" ? styles.dark : ""}`}>
        <HeaderAction type="close" onClick={onClose} />
        <div className={styles.content}>
          <NavMenu onClick={onClose} type="sidebar" />
          <HeaderAction type="theme" />
        </div>
      </aside>
    </>
  );
}
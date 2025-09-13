import { useSelector } from "react-redux";

import NavBar from "../Navigation/NavBar";

import styles from "./styles/AppHeader.module.scss";
import BrandLogo from "../../ui/Logo/BrandLogo";

export default function AppHeader({ onOpenSidebar, hidden }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <header
      className={`${styles.bar} ${theme === "dark" ? styles.dark : ""} ${
        hidden ? styles.hidden : ""
      }`}
    >
      <BrandLogo hidden={hidden} />
      <NavBar onOpenSidebar={onOpenSidebar} hidden={hidden} />
    </header>
  );
}
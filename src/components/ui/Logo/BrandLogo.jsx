import { useSelector } from "react-redux";

import logoLight from "../../../assets/Icons/logo-light.svg"; 
import logoDark from "../../../assets/Icons/logo-dark.svg"; 
import styles from "./BrandLogo.module.scss";

export default function BrandLogo({ hidden }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={`${styles.brand} ${hidden ? styles.hidden : ""}`}>
      <img src={theme === "dark" ? logoDark : logoLight} alt="Logo" />
      <span className={`${styles.wordmark} ${theme === "dark" ? styles.dark : ""}`}>
        JAO
      </span>
    </div>
  );
}
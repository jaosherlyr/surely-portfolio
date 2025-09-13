import { useSelector } from "react-redux";
import styles from "./Button.module.scss";

export default function Button({ children, onClick, type = "button" }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <button
      type={type}
      className={`${styles.button} ${theme === "dark" ? styles.dark : ""}`}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
}
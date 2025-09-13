import { useSelector } from "react-redux";
import styles from "./TimelineText.module.scss";

export default function TimelineText({ children, className }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <p className={`${styles.text} ${theme === "dark" ? styles.dark : ""} ${className || ""}`}>
      <i>{children}</i>
    </p>
  );
}

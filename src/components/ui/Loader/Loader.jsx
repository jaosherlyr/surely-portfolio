import { useSelector } from "react-redux";
import styles from "./Loader.module.scss";

export default function Loader() {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <div className={`${styles.loader} ${theme === 'dark' ? styles.dark : ''}`}></div>
    );
}
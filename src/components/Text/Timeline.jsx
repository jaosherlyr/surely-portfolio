import { useSelector } from "react-redux";

import styles from './styles/Timeline.module.scss';

export default function Timeline({ children, className }) {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <p className={`${theme === 'dark' ? styles.dark : ''} ${styles.timeline} ${className}`}>
            <i>{ children }</i>
        </p>
    );
}
import { useSelector } from 'react-redux';

import styles from './Button.module.scss';

export default function Button({ label, onClick }) {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <div className={`${styles.btn} ${theme === 'dark' ? styles.dark : ''}`} onClick={onClick}>
            {label}
        </div>
    );
}
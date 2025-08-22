import { useSelector } from 'react-redux';
import { IoOpenOutline } from "react-icons/io5";

import styles from './styles/BackgroundCard.module.scss';

export default function BackgroundCard({ title, timeline, school, employment, type, link, details }) {
    const theme = useSelector((state) => state.theme.mode);

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    return (
        <div className={`${styles.backgroundCardContainer} ${theme === 'dark' ? styles.dark : ''}`}>
            <span className={styles.rail} aria-hidden="true" />
            <div>
                <h3 className={styles.backgroundTitle}>{title}</h3>
                <p className={`${styles.timeline} ${theme === 'dark' ? styles.dark : ''}`}>
                    <i>{timeline}</i>
                </p>

                {type === 'experience' && <p className={styles.backgroundSubtitle}>{employment}</p>}

                {type === 'education' ? (
                    <>
                        <p 
                            className={`${styles.backgroundSubtitle} ${styles.school}`}
                            onClick={handleClick}
                            style={{ cursor: link ? 'pointer' : 'default' }}
                        >
                            {school}
                            <IoOpenOutline className={styles.link} />
                        </p> 

                        {details.map((detail, i) => (
                            <p key={i} className={styles.details}>
                                {detail}
                            </p>
                        ))}
                    </>
                ) : (
                    <p className={styles.details}>{details}</p>
                )}
            </div>
        </div>
    );
}
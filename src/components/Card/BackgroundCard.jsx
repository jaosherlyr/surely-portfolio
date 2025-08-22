import styles from './styles/BackgroundCard.module.scss';

export default function BackgroundCard({ title, timeline, school, employment, type, link, details }) {
    return (
        <div>
            <span className={styles.rail} aria-hidden="true" />
            <div>
                <h3>{title}</h3>
                <p>{timeline}</p>
                {type === 'experience' && <p>{employment}</p>}

                {type === 'education' ? (
                    <>
                        <p>{school}</p> 
                        <ul>
                            {details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>{details}</p>
                )}
            </div>
        </div>
    );
}
export default function BackgroundCard({ title, timeline, school, employment, type, link, details }) {
    return (
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
    );
}
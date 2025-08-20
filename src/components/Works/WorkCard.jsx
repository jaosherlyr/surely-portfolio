export default function WorkCard({ title, timeline, media, details }) {
    const mediaArray = Array.isArray(media) ? media : [media].filter(Boolean);

    return (
        <div>
            {mediaArray.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    loading="lazy"
                />
            ))}

            <div>
                <h3>{title}</h3>
                <p>{timeline}</p>
                <p>{details}</p>
            </div>
        </div>
    ); 
}
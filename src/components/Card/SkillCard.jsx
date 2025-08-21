export default function SkillCard({ title, description, list }) {

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{list}</p>
        </div>
    );
}
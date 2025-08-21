import { IoClipboard } from "react-icons/io5";

export default function ContactCard({label, icon, link, value, type}) {
    return (
        <div>
            { type === 'info' ? (
                <>
                    <p>{label}: </p>
                    <p>{value}</p>
                    <IoClipboard />
                </>
            ) : (
                <>
                    {icon}
                    <p>{label}</p>
                </>
            )}
        </div>
    );
}
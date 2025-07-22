import { IoCopy } from "react-icons/io5";

export default function ContactItem({ contactIcon, label, link, onCopy, value }) {
    return (
        <div>
            { link ? (
                <a href={link} target='_blank'>
                    {contactIcon} {label}
                </a>
            ) : (
                <div>
                    <span>
                        {contactIcon} {label} {value}
                    </span>

                    { onCopy && (
                        <IoCopy onClick={onCopy} />
                    )}
                </div>
            )}
        </div>
    );
}
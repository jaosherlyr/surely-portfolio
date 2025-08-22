import { IoClipboardOutline, IoNavigateOutline } from "react-icons/io5";
import { toast } from "react-toastify";

import styles from './styles/ContactCard.module.scss';

export default function ContactCard({label, icon, link, value, type}) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            toast.success(`${label} copied to clipboard!`);
        } catch {
            toast.error("Oops! Could not copy.");
        }
    };

    const handleLink = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    const handleEmail = (e) => {
    e.stopPropagation();
    if (value) {
        const subject = encodeURIComponent("Just wanted to send you a Hey!");
        window.location.href = `mailto:${value}?subject=${subject}`;
    }
  };

    return (
        <div 
            className={styles.contactCardContainer}
            onClick={handleLink}
            style={{ cursor: link ? 'pointer' : 'default' }}
        >
            { type !== 'socials' ? (
                <>
                    <p>{label}: </p>
                    <p>{value}</p>

                    <span>
                        { type === 'email' && 
                            <IoNavigateOutline 
                                onClick={handleEmail}
                            /> 
                        }

                        <IoClipboardOutline 
                            onClick={handleCopy}
                        />
                    </span>
                </>
            ) : (
                <div className={styles.socialsContainer}>
                    <span>{icon}</span>
                    <p>{label}</p>
                </div>
            )}
        </div>
    );
}
import { IoCopy } from "react-icons/io5";
import styles from './styles/ContactItem.module.scss';

export default function ContactItem({ contactIcon, label, link, onCopy, value, actionIcon, actionLink }) {
    return (
        <>
            {link ? (
                <div className={styles.linkWrapper}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        {contactIcon} {label}
                    </a>
                </div>
            ) : (
                <div className={styles.contactCopy}>
                    <span className={styles.copyLabel}>
                        {contactIcon} {label} {value}
                    </span>

                    <div className={styles.contactIcons}>
                        {actionIcon && actionLink && (
                            <a href={actionLink} className={`${styles.sendIcon} icon`} target="_blank" rel="noopener noreferrer">
                                {actionIcon}
                            </a>
                        )}

                        {onCopy && (
                            <span className={`${styles.copyIcon} icon`}>
                                <IoCopy onClick={onCopy} />
                            </span>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

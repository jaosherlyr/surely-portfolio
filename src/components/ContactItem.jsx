import { IoCopy } from "react-icons/io5";

import styles from './styles/ContactItem.module.scss';

export default function ContactItem({ contactIcon, label, link, onCopy, value }) {
    return (
        <>
            { link ? (
                <div className={styles.linkWrapper}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        {contactIcon} {label}
                    </a>
                </div>
            ) : (
                <div className={styles.contactCopy}>
                    <span>
                        {contactIcon} {label} {value}
                    </span>

                    { onCopy && (
                        <span className={`${styles.copyIcon} icon`}>
                            <IoCopy onClick={onCopy} />
                        </span>
                    )}
                </div>
            )}
        </>
    );
}
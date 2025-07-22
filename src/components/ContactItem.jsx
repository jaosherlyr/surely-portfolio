import { IoCopy } from "react-icons/io5";

import styles from './styles/ContactItem.module.scss';

export default function ContactItem({ contactIcon, label, link, onCopy, value }) {
    return (
        <>
            { link ? (
                <a href={link} target='_blank' className={styles.ContactLink}>
                    {contactIcon} {label}
                </a>
            ) : (
                <div className={styles.ContactCopy}>
                    <span>
                        {contactIcon} {label} {value}
                    </span>

                    { onCopy && (
                        <span className={styles.copyIcon}>
                            <IoCopy onClick={onCopy} />
                        </span>
                    )}
                </div>
            )}
        </>
    );
}
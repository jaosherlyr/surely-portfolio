import profile from '../../assets/profilePicture.jpg';
import styles from '../styles/HomeIntroImage.module.scss';

export default function HomeIntroImage() {
    return (
        <div className={styles.IntroImage}>
            <div className={styles.rotateText}></div>
            <img src={profile} alt="Profile Image" className={styles.profile} />
        </div>
    );
}
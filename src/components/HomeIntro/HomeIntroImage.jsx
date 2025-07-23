import profile from '../../assets/profilePicture.jpg';
import tempRotateText from '../../assets/exampleText-light.png';
import styles from './HomeIntro.module.scss';

export default function HomeIntroImage() {
    return (
        <div className={styles.introImage}>
            {/* <div className={styles.rotateText}></div> */}
            <img src={tempRotateText} alt="circle Text" className={styles.rotateText} />
            <img src={profile} alt="Profile Image" className={styles.profile} />
        </div>
    );
}
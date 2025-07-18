import profile from '../../assets/profilePicture.jpg';
import tempRotateText from '../../assets/exampleText-light.png';
import styles from '../styles/HomeIntroImage.module.scss';

export default function HomeIntroImage() {
    return (
        <div className={styles.IntroImage}>
            {/* <div className={styles.rotateText}></div> */}
            <img src={tempRotateText} alt="circle Text" className={styles.rotateText} />
            <img src={profile} alt="Profile Image" className={styles.profile} />
        </div>
    );
}
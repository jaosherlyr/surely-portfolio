//import Images
import profileImg from '../../assets/profilePicture.jpg';
import tempRotateText from '../../assets/exampleText.png';

import styles from './Intro.module.scss';

export default function IntroImage() {
    return (
        <div className={styles.introLeft}>
            <div className={styles.imgContainer}>
                <img className={styles.circleText} src={tempRotateText} alt="Intro Section - Rotating Circle Text" />
                <img className={styles.profileImg} src={profileImg} alt="Intro Section - Profile Image" />
            </div>
        </div>
    );
}
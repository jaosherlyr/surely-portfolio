//import Images
import profileImg from '../../assets/profilePicture.jpg';
import tempRotateText from '../../assets/exampleText.png';

import styles from './Intro.module.scss';

export default function IntroImage() {
    return (
        <div>
            <img src={tempRotateText} alt="Intro Section - Rotating Circle Text" />
            <img src={profileImg} alt="Intro Section - Profile Image" />
        </div>
    );
}
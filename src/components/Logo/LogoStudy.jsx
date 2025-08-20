import { useSelector } from 'react-redux';

import logoStudyLight from '../../assets/logoStudy-light.png';
import logoStudyDark from '../../assets/logoStudy-dark.png';
import styles from './LogoStudy.module.scss';

export default function LogoInfo() {
    const theme = useSelector((state) => state.theme.mode);
    const logoStudyImg = theme === 'dark' ? logoStudyDark : logoStudyLight;

    return (
        <div>
            <div>
                <h1>Where Identity meets Design</h1>

                <p>This logo is the result of my identity, my culture, and my creativity.</p>
                <h3>"ᜐ" + "S"</h3>
                <p>
                    I used the precolonial writing script of the Philippines, Baybayin. 
                    The character ᜐ is read as ‘sa’, which I combined with the modern letter ‘S’ to represent the my name.
                </p>
            </div>

            <img src={logoStudyImg} alt="Logo Study Section - Logo Image" />
        </div>
    );
}
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoArrowForwardOutline } from "react-icons/io5";

import Button from '../Commons/Button';
import styles from './HomeIntro.module.scss';

export default function HomeIntroText() {
    const theme = useSelector((state) => state.theme.mode);
    const textTheme = theme === 'dark' ? styles.dark : '';
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/works');
    };

    return (
        <div className={`${styles.introText} ${textTheme}`}>
            <p className={`heading ${textTheme}`}>
                <span className={`${styles.greeting} whitespace-nowrap`}>Hi! I am</span>
                <span className={`${styles.name} ${textTheme} whitespace-nowrap`}>
                    Sherly R. Jao
                </span>
            </p>

            <p className={`${styles.introSubheading} ${textTheme} whitespace-nowrap subheading`}>
                Artist | Web Developer & Designer
            </p>

            <p className={`text ${textTheme} whitespace-nowrap`}>
                I code and I draw, and I'm from the 
                <strong>
                    Philippines 🇵🇭
                </strong> 

                <br/>
                Just trying my best to navigate life with the skills I have.
            </p>

            <Button 
                onClick={handleClick}
                label={<>
                    Check my Works! <IoArrowForwardOutline className={`${styles.arrowIcon} icon`}/>
                </>}
            />
        </div>
    );
}
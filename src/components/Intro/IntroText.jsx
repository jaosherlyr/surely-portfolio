import styles from './Intro.module.scss';
import Button from '../Commons/Button';

export default function IntroText() {

    return (
        <div>
            <p>I'm currently looking for work!</p>

            <h3>
                I’m currently in my final year of pursuing a Bachelor of Science in Computer Science. <br/>
                I’ve gained some experience as a freelance artist through commissioned work, but now 
                I’m focusing on building my career by developing stronger skills in web development.
            </h3>
            
            <Button>Download my resume</Button>
        </div>
    );
}
import styles from './Intro.module.scss';
import Button from '../Commons/Button';

export default function IntroText() {

    return (
        <div className={styles.introText}>
            <h4>Available for work</h4>
            <h3>I'm currently in my final year of pursuing a Bachelor of Science in Computer Science.</h3>
            <h3>I have experience with freelance art commissions, and I’m now focused on gaining more experience in web development.</h3>
            <Button>Download my resume</Button>
        </div>
    );
}
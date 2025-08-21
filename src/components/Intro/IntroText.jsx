import Button from '../Button/Button';
import { toast } from 'react-toastify';
import styles from './Intro.module.scss';
import file from '../../assets/JaoSherly_Resume.pdf'; // served from /public

export default function IntroText() {
  const handleDownload = () => {
    try {
      toast.success('Downloading resume…');

      const a = document.createElement('a');
      a.href = file;
      a.download = 'JaoSherly_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      toast.error('Oops—could not start the download.');
      console.error(e);
    }
  };

  return (
    <div className={styles.introRight}>
      <p>I'm currently looking for work!</p>

      <h3 className={styles.intro}>
        I’m currently in my final year of pursuing a Bachelor of Science in Computer Science. <br/>
        I’ve gained some experience as a freelance artist through commissioned work, but now 
        I’m focusing on building my career by developing stronger skills in web development.
      </h3>

      <Button onClick={handleDownload}>Download my resume</Button>
    </div>
  );
}

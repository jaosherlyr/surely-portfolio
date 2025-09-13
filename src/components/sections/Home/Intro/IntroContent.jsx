import { toast } from "react-toastify";

import Button from "../../../ui/Button/Button";
import file from "../../../../assets/pdf/JaoSherly_Resume.pdf";
import styles from "./IntroSection.module.scss";

export default function IntroContent() {
  const handleDownload = () => {
    try {
      toast.success("Downloading resume…");
      const a = document.createElement("a");
      a.href = file;
      a.download = "JaoSherly_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      toast.error("Oops—could not start the download.");
      console.error(e);
    }
  };

  return (
    <div className={styles.right}>
      <p>I&apos;m currently looking for work!</p>

      <h3 className={styles.copy}>
        I’m currently in my final year of pursuing a Bachelor of Science in Computer Science. <br />
        I’ve gained some experience as a freelance artist through commissioned work, but now
        I’m focusing on building my career by developing stronger skills in web development.
      </h3>

      <Button onClick={handleDownload}>Download my resume</Button>
    </div>
  );
}
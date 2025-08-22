import BackgroundList from "../Lists/BackgroundList";
import EducationList from "../Lists/EducationList";

import styles from "./Background.module.scss";

export default function Background() {
    return (
        <div className={styles.backgroundSection}>
            <h1 className={styles.backgroundTitle}>I am the sum of all my experiences and education.</h1>

            <div className={styles.backgroundContainer}>
                <div className={styles.listContainer}>
                    <BackgroundList />
                </div>

                <div className={styles.listContainer}>
                    <h2 className={styles.backgroundSubtitle}>Education</h2>
                    <EducationList />
                </div>
            </div>
        </div>
    );
}
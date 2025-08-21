import BackgroundList from "../Lists/BackgroundList";
import EducationList from "../Lists/EducationList";


export default function Background() {
    return (
        <div>
            <h1>I am the sum of all my experiences and education.</h1>

            <div>
                <BackgroundList />
            </div>

            <div>
                <h2>Education</h2>
                <EducationList />
            </div>
        </div>
    );
}
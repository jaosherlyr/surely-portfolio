import Designs from "../components/Works/Designs";
import Illustrations from "../components/Works/Illustrations";
import WebProjects from "../components/Works/WebProjects";

export default function Works() {
  return(
    <section id="works">
      <h1>Explore my Works!</h1>

      <h2>Developments</h2>
      <div>
        <WebProjects/>
      </div>

      <h2>UI/UX Designs</h2>
      <div>
        <Designs />
      </div>

      <h2>Illustrations</h2>
      <div>
        <Illustrations />
      </div>
    </section>
  );
}
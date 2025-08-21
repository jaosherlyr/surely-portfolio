import DesignsList from "../components/Lists/DesignsList";
import IllustrationsList from "../components/Lists/IllustrationsList";
import WebProjectsList from "../components/Lists/WebProjectsList";

export default function Works() {
  return(
    <section id="works">
      <h1>Explore my Works!</h1>

      <h2>Developments</h2>
      <div>
        <WebProjectsList/>
      </div>

      <h2>UI/UX Designs</h2>
      <div>
        <DesignsList />
      </div>

      <h2>Illustrations</h2>
      <div>
        <IllustrationsList />
      </div>
    </section>
  );
}
import Background from "../Background/Background";
import Skills from "../Skills/Skills";
import styles from "./About.module.scss";

export default function Profile() {
  return (
    <section id="about">
        <Skills />
        <Background />
    </section>
  )
}
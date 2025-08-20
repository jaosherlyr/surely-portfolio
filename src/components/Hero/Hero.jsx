import { useSelector } from 'react-redux';

//import Images
import greetingsDark from '../../assets/greetings-dark.png';
import greetingsLight from '../../assets/greetings-light.png';
import heroHand from '../../assets/heroHand.png'

import styles from "./Hero.module.scss";

export default function Hero() {
  const theme = useSelector((state) => state.theme.mode);
  const greetings = theme === 'dark' ? greetingsDark : greetingsLight;

  return (
    <div>
      <div>
        <img src={greetings} alt="Hero Section - Hello Greeting" />

        <h1>Hi! I'm Sherly.</h1>
        <h1>I'm a Web Developer and Artist Based in the Philippines</h1>
      </div>

      <img src={heroHand} alt="Hero Section - Hand with Pen Stylus" />
    </div>
  );
}

import { NavLink } from 'react-router-dom';

import ThemeIcon from './ThemeIcon';
import styles from './styles/NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/works">Works</NavLink>
      <a href="/#contact">Contact</a>
      <ThemeIcon />
    </nav>
  );
}
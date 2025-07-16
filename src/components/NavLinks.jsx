import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './styles/NavLinks.module.scss';

export default function NavLinks({ onClick }) {
  const theme = useSelector((state) => state.theme.mode);
  const linkTheme = theme === 'dark' ? styles.dark : '';

  return (
    <>
      <NavLink
        to="/"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `${linkTheme} ${isActive ? styles.active : ''}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/works"
        onClick={onClick}
        className={({ isActive }) =>
          `${linkTheme} ${isActive ? styles.active : ''}`
        }
      >
        Works
      </NavLink>

      <Link
        to="/#contact"
        onClick={onClick}
        className={linkTheme}
      >
        Contact
      </Link>
    </>
  );
}
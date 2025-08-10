import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './NavLinks.module.scss';

export default function NavLinks({ onClick }) {
  const theme = useSelector((state) => state.theme.mode);
  const linkTheme = theme === 'dark' ? styles.dark : '';

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (onClick) onClick();
  };

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

      <NavLink
        to="/profile"
        onClick={onClick}
        className={({ isActive }) =>
          `${linkTheme} ${isActive ? styles.active : ''}`
        }
      >
        About
      </NavLink>

      <button
        onClick={handleScrollToContact}
      >
        Contact
      </button>
    </>
  );
}
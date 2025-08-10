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

  const handleScrollToAbout = () => {
  if (location.pathname !== '/') {
    navigate('/', { state: { scrollToAbout: true } });
  } else {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (onClick) onClick();
};

  return (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${linkTheme} ${isActive ? styles.active : ''}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/works"
        className={({ isActive }) =>
          `${linkTheme} ${isActive ? styles.active : ''}`
        }
      >
        Works
      </NavLink>

      <button onClick={handleScrollToAbout}>
        About
      </button>

      <button
        onClick={handleScrollToContact}
      >
        Contact
      </button>
    </>
  );
}
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useScrollSpy } from '../../context/ScrollSpyContext';
import styles from './styles/NavLinks.module.scss';

export default function NavLinks({ onClick }) {
  const theme = useSelector((s) => s.theme.mode);
  const linkTheme = theme === 'dark' ? styles.dark : '';
  const { activeSection } = useScrollSpy();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  const handleScrollTo = (id, stateKey) => {
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { [stateKey]: true } }); // useRouteScroll will handle it
    }
    onClick?.();
  };

  return (
    <div className={styles.navLink}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => isActive ? "link active" : "link"}
      >
        Home
      </NavLink>

      <NavLink
        to="/works"
        className={({ isActive }) =>
          [linkTheme, isActive && styles.active].filter(Boolean).join(' ')
        }
      >
        Works
      </NavLink>

      <button
        onClick={() => handleScrollTo('about', 'scrollToAbout')}
        className={[linkTheme, onHome && activeSection === 'about' && styles.active]
          .filter(Boolean)
          .join(' ')}
      >
        About
      </button>

      <button
        onClick={() => handleScrollTo('contact', 'scrollToContact')}
        className={[linkTheme, onHome && activeSection === 'contact' && styles.active]
          .filter(Boolean)
          .join(' ')}
      >
        Contact
      </button>
    </div>
  );
}
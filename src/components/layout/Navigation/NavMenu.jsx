import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useScrollSpy } from "../../../context/ScrollSpyContext";
import styles from "./styles/NavMenu.module.scss";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function NavMenu({ onClick, type = "header" }) {
  const theme = useSelector((s) => s.theme.mode);
  const linkTheme = theme === "dark" ? styles.dark : "";
  const { activeSection, setActiveSection } = useScrollSpy();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const handleScrollTo = (id, stateKey) => {
    // set a short programmatic-scroll lock so hook won't re-assert "contact"
    window.__scrollSpyProgrammatic = { until: Date.now() + 800, target: id };

    setActiveSection(id); // optimistic selection so UI updates immediately

    if (onHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/", { state: { [stateKey]: true } });
    }

    onClick?.(); // close sidebar
  };

  return (
    <div className={type === "sidebar" ? styles.vertical : styles.inline}>
      <NavLink
        to="/"
        end
        onClick={onClick}
        className={({ isActive }) =>
          cx(linkTheme, isActive && onHome && activeSection === "home" && styles.active)
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/works"
        onClick={onClick}
        className={({ isActive }) => cx(linkTheme, isActive && styles.active)}
      >
        Works
      </NavLink>

      <button
        onClick={() => handleScrollTo("about", "scrollToAbout")}
        className={cx(linkTheme, onHome && activeSection === "about" && styles.active)}
      >
        About
      </button>

      <button
        onClick={() => handleScrollTo("contact", "scrollToContact")}
        className={cx(linkTheme, onHome && activeSection === "contact" && styles.active)}
      >
        Contact
      </button>
    </div>
  );
}

import { IoMenu, IoSunny, IoMoon } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from '../../store/themeSlice';

import HeaderIcon from '../Header/HeaderIcon';
import NavLinks from './NavLinks';
import styles from './styles/NavBar.module.scss';

export default function NavBar({ onOpenSidebar, hidden }) {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
   const Icon = theme === "light" ? IoSunny : IoMoon;

   const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <nav className={styles.navbar}>
        <NavLinks />
        <HeaderIcon type="theme" onClick={handleToggle}/>
      </nav>

      <div className={`${styles.menuIcon} ${hidden ? styles.hidden : ''}`}>
        <HeaderIcon type="menu" onClick={onOpenSidebar} />
      </div>
    </>
  );
}
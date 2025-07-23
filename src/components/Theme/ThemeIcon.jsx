import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { IoSunny, IoMoon } from "react-icons/io5";

import styles from "./ThemeIcon.module.scss";

export default function ThemeIcon() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const Icon = theme === "light" ? IoSunny : IoMoon;

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return <Icon onClick={handleToggle} className={`icon ${styles.themeIcon} ${theme === 'dark' ? styles.dark : ''}`} />;
}
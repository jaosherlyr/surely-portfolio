import { IoMenu, IoSunny, IoMoon, IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from '../../store/themeSlice';

import styles from "./styles/HeaderIcon.module.scss";

export default function HeaderIcon({ type, onClick }) {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  let Icon;
  let handleClick = onClick;

  if (type === 'theme') {
    Icon = theme === 'dark' ? IoMoon : IoSunny;
    handleClick = () => dispatch(toggleTheme());
  } else {
    Icon = type === 'menu' ? IoMenu : IoClose;
  }
  
  return <Icon onClick={handleClick} className={`icon ${styles.headerIcon} ${theme === 'dark' ? styles.dark : ''}`}/>;
}
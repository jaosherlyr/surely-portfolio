import { IoMenu, IoSunny, IoMoon, IoClose } from "react-icons/io5";
import styles from "./styles/HeaderIcon.module.scss";
import { useSelector } from "react-redux";

export default function HeaderIcon({ type, onClick }) {
    const theme = useSelector((state) => state.theme.mode);
  let Icon;

  if (type === 'theme') {
    Icon = theme === 'dark' ? IoMoon : IoSunny;
  } else {
    Icon = type === 'menu' ? IoMenu : IoClose;
  }
  
  return <Icon onClick={onClick} className={`icon ${styles.headerIcon}`}/>;
}
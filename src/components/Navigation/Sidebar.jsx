import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';

import NavLinks from './NavLinks';
import styles from './styles/Sidebar.module.scss';
import HeaderIcon from "../Header/HeaderIcon";

export default function Sidebar({ open, onClose }) {
  if (!open) return null;

  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={`${styles.sidebar} ${theme === 'dark' ? styles.dark : ''}`}>
         <HeaderIcon type="close" onClick={onClose}/>
        <NavLinks onClick={onClose}/>
      </div>
    </>
  );
}
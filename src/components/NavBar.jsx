import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

import ThemeIcon from './ThemeIcon';
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
import styles from './styles/NavBar.module.scss';

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <NavLinks />
        <ThemeIcon />
      </nav>

      <IoMenu
        className={styles.menuIcon}
        onClick={() => setSidebarOpen(true)}
      />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
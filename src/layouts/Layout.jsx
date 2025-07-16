import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Layout() {
  const theme = useSelector((state) => state.theme.mode);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
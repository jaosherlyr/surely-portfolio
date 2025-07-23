import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header/Header';
import Sidebar from '../components/Navigation/Sidebar';

export default function Layout() {
  const theme = useSelector((state) => state.theme.mode);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setSidebarOpen(false);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
      <main>
        <Outlet />
        <ToastContainer position="top-right" autoClose={2000} />
      </main>
    </>
  );
}
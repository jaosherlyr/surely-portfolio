import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

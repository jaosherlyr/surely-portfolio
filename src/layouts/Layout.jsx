import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ScrollSpyProvider } from "../context/ScrollSpyContext";

import ScrollToTop from "../components/ui/ScrollToTop";
import ApppHeader from "../components/layout/Header/AppHeader";
import AppSidebar from "../components/layout/Navigation/AppSidebar";

export default function Layout() {
  const theme = useSelector((state) => state.theme.mode);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => { document.body.className = theme; }, [theme]);

  return (
    <ScrollSpyProvider>
      <ScrollToTop />
      <ApppHeader
        onOpenSidebar={() => setSidebarOpen(true)}
        hidden={sidebarOpen}
      />
      <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="layout-main">
        <Outlet />
        <ToastContainer position="top-right" autoClose={2000} />
      </main>
    </ScrollSpyProvider>
  );
}

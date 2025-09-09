import { createContext, useContext, useMemo, useState } from 'react';

const ScrollSpyContext = createContext(null);

export function ScrollSpyProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home');
  const value = useMemo(() => ({ activeSection, setActiveSection }), [activeSection]);
  return <ScrollSpyContext.Provider value={value}>{children}</ScrollSpyContext.Provider>;
}

export function useScrollSpy() {
  const ctx = useContext(ScrollSpyContext);
  if (!ctx) throw new Error('useScrollSpy must be used within <ScrollSpyProvider>');
  return ctx;
}
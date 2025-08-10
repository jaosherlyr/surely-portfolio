import { createContext, useContext } from 'react';

export const ActiveSectionContext = createContext({
  activeSection: 'home',
  setActiveSection: () => {},
});

export const useActiveSection = () => useContext(ActiveSectionContext);
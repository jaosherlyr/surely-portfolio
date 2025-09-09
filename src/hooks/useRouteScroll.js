import { useEffect } from 'react';

// Hook: scrolls to #about or #contact if location.state says so
export default function useRouteScroll(location) {
  useEffect(() => {
    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    if (location.state?.scrollToContact) {
      scrollTo('contact');
    } else if (location.state?.scrollToAbout) {
      scrollTo('about');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // clear state so it doesn't repeat
    if (location.state) {
      window.history.replaceState({}, document.title);
    }
  }, [location]);
}
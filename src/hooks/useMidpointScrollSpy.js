import { useEffect, useRef } from 'react';

// Custom hook: tells you which <section id="..."> is around the viewport midpoint
// Returns a ref; attach it to the parent wrapper that holds all your sections.
export default function useMidpointScrollSpy(onChange, { headerEm = 5, headerCssVar = '--header-h' } = {}) {
  const rootRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    // figure out header height in px
    const headerPx = (() => {
      const cssVal = getComputedStyle(document.documentElement).getPropertyValue(headerCssVar).trim();
      if (cssVal) {
        const temp = document.createElement('div');
        temp.style.height = cssVal;
        temp.style.position = 'absolute';
        temp.style.visibility = 'hidden';
        document.body.appendChild(temp);
        const px = temp.getBoundingClientRect().height;
        document.body.removeChild(temp);
        return px || 0;
      }
      const base = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      return headerEm * base;
    })();

    const getRootMargin = () => {
      const vh = window.innerHeight;
      const top = -(vh / 2 - headerPx);
      const bottom = -(vh / 2);
      return `${top}px 0px ${bottom}px 0px`;
    };

    const sections = [...container.querySelectorAll('section[id]')];

    const createObserver = () =>
      new IntersectionObserver(
        (entries) => {
          const hit = entries.find(e => e.isIntersecting);
          if (hit) onChange?.(hit.target.id);
        },
        { root: null, rootMargin: getRootMargin(), threshold: 0 }
      );

    const setup = () => {
      observerRef.current?.disconnect();
      observerRef.current = createObserver();
      sections.forEach(sec => observerRef.current.observe(sec));
    };

    setup();
    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      observerRef.current?.disconnect();
    };
  }, [onChange, headerEm, headerCssVar]);

  return rootRef;
}
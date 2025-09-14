// useMidpointScrollSpy.js
import { useEffect, useRef } from 'react';

export default function useMidpointScrollSpy(
  onChange,
  { headerEm = 5, headerCssVar = '--header' } = {} // <-- use --header
) {
  const rootRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    // header height in px
    const headerPx = (() => {
      const cssVal = getComputedStyle(document.documentElement)
        .getPropertyValue(headerCssVar)
        .trim();
      if (cssVal) {
        const temp = document.createElement('div');
        temp.style.height = cssVal;
        temp.style.position = 'absolute';
        temp.style.visibility = 'hidden';
        document.body.appendChild(temp);
        const px = temp.getBoundingClientRect().height;
        temp.remove();
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

    const getSections = () =>
      [...container.querySelectorAll('section[id], section[data-section]')];

    const emitClosest = (entries) => {
      const midY = window.innerHeight / 2;
      const visible = entries.filter(e => e.isIntersecting);
      if (!visible.length) return;

      const best = visible
        .map(e => {
          const r = e.target.getBoundingClientRect();
          const center = r.top + r.height / 2;
          return { e, d: Math.abs(center - midY) };
        })
        .sort((a, b) => a.d - b.d)[0];

      const id = best.e.target.id || best.e.target.getAttribute('data-section');
      if (id) onChange?.(id);
    };

    const createObserver = () =>
      new IntersectionObserver(emitClosest, {
        root: null,
        rootMargin: getRootMargin(),
        threshold: 0,
      });

    const observeAll = () => {
      observerRef.current?.disconnect();
      const obs = createObserver();
      observerRef.current = obs;
      getSections().forEach(sec => obs.observe(sec));
    };

    observeAll();

    const onResize = () => observeAll();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    // Re-scan when children change
    const mo = new MutationObserver(observeAll);
    mo.observe(container, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      observerRef.current?.disconnect();
      mo.disconnect();
    };
  }, [onChange, headerEm, headerCssVar]);

  return rootRef;
}

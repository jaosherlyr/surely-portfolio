// useMidpointScrollSpy.js
import { useEffect, useRef } from "react";

export default function useMidpointScrollSpy(
  onChange,
  { headerEm = 5, headerCssVar = "--header" } = {}
) {
  const rootRef = useRef(null);
  const observerRef = useRef(null);
  const wasNearBottomRef = useRef(false);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    const headerPx = (() => {
      const cssVal = getComputedStyle(document.documentElement)
        .getPropertyValue(headerCssVar)
        .trim();
      if (cssVal) {
        const tmp = document.createElement("div");
        tmp.style.height = cssVal;
        tmp.style.position = "absolute";
        tmp.style.visibility = "hidden";
        document.body.appendChild(tmp);
        const px = tmp.getBoundingClientRect().height;
        tmp.remove();
        return px || 0;
      }
      const base = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      return headerEm * base;
    })();

    const getSections = () =>
      Array.from(container.querySelectorAll("section[id], section[data-section]"));

    let sections = getSections();

    const emit = (id) => { if (id) onChange?.(id); };

    const isNearBottom = () => {
      const doc = document.documentElement;
      return window.scrollY + window.innerHeight >= doc.scrollHeight - 2;
    };

    const emitNearestNow = () => {
      if (!sections.length) return;
      const midY = window.innerHeight / 2;
      let bestId = null;
      let bestDist = Infinity;
      for (const el of sections) {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const d = Math.abs(center - midY);
        if (d < bestDist) {
          bestDist = d;
          bestId = el.id || el.getAttribute("data-section");
        }
      }
      if (bestId) emit(bestId);
    };

    const programmaticActive = () => {
      const lock = window.__scrollSpyProgrammatic;
      return lock && Date.now() < lock.until;
    };

    const emitLastIfBottomTransition = () => {
      if (programmaticActive()) return false; // ignore bottom while locked
      const now = isNearBottom();
      if (now && !wasNearBottomRef.current && sections.length) {
        const last = sections[sections.length - 1];
        const id = last.id || last.getAttribute("data-section");
        emit(id);
        wasNearBottomRef.current = now;
        return true;
      }
      wasNearBottomRef.current = now;
      return false;
    };

    const createObserver = () => {
      const vh = window.innerHeight;
      const rootMargin = `${-(vh / 2 - headerPx)}px 0px ${-(vh / 2)}px 0px`;

      return new IntersectionObserver(
        (entries) => {
          if (!programmaticActive()) {
            if (emitLastIfBottomTransition()) return;
          }
          if (wasNearBottomRef.current && !programmaticActive()) return;

          const midY = window.innerHeight / 2;
          const visible = entries.filter((e) => e.isIntersecting);
          if (!visible.length) return;

          const best = visible
            .map((e) => {
              const r = e.target.getBoundingClientRect();
              const center = r.top + r.height / 2;
              return { e, d: Math.abs(center - midY) };
            })
            .sort((a, b) => a.d - b.d)[0];

          const id = best.e.target.id || best.e.target.getAttribute("data-section");
          emit(id);
        },
        { root: null, rootMargin, threshold: 0 }
      );
    };

    const observeAll = () => {
      observerRef.current?.disconnect();
      sections = getSections();
      const obs = createObserver();
      observerRef.current = obs;
      sections.forEach((sec) => obs.observe(sec));
      if (!programmaticActive()) emitLastIfBottomTransition();
    };

    observeAll();

    const onResizeOrOrient = () => observeAll();
    const onScroll = () => {
      const locked = programmaticActive();
      if (!locked) {
        const prev = wasNearBottomRef.current;
        const hitBottom = emitLastIfBottomTransition();
        if (prev && !wasNearBottomRef.current) emitNearestNow();
        if (!hitBottom && !wasNearBottomRef.current) {
          // optional: could emitNearestNow() here, but IO will handle
        }
      }
    };

    window.addEventListener("resize", onResizeOrOrient);
    window.addEventListener("orientationchange", onResizeOrOrient);
    window.addEventListener("scroll", onScroll, { passive: true });

    const mo = new MutationObserver(observeAll);
    mo.observe(container, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", onResizeOrOrient);
      window.removeEventListener("orientationchange", onResizeOrOrient);
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
      mo.disconnect();
    };
  }, [onChange, headerEm, headerCssVar]);

  return rootRef;
}

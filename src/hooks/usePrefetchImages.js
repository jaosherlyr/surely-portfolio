// src/hooks/usePrefetchImages.js
import { useEffect, useMemo } from "react";

export default function usePrefetchImages(srcs = [], enabled = true) {
  // sanitize list (remove falsy)
  const list = useMemo(
    () => (Array.isArray(srcs) ? srcs.filter(Boolean) : []),
    [srcs]
  );

  // make a stable key from string items
  const key = useMemo(() => list.join("|"), [list]);

  useEffect(() => {
    if (!enabled || list.length === 0) return;

    const imgs = list.map((src) => {
      const i = new Image();
      i.decoding = "async";
      i.loading = "eager";
      i.src = src;
      return i;
    });

    return () => {
      imgs.forEach((i) => (i.src = "")); // let GC clean up
    };
    // deps are simple & static now
  }, [enabled, key, list]);
}
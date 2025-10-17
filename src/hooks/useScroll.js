// src/hooks/useScroll.js
import { useState, useEffect } from "react";

export const useScroll = (ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Khi phần tử đi vào khung nhìn → tính % scroll
      const visible = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      setProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress; // 0 -> 1
};

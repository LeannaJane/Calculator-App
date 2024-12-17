import { useEffect } from "react";

const DisableZoom = () => {
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };
    window.addEventListener("wheel", preventZoom, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventZoom);
    };
  }, []);

  return null;
};

export default DisableZoom;
import { useEffect } from "react";

const useEscapeKey = () => {
  useEffect((callback) => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        callback(e);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useEscapeKey;

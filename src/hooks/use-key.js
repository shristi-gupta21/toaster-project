import { useEffect } from "react";

const useKey = (key, callback) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === key) {
        callback(e);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
};

export default useKey;

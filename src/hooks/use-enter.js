import React, { useEffect } from "react";

export const useEnter = (callback) => {
  useEffect(() => {
    function handleEnterKey(e) {
      if (e.code === "Enter") {
        callback(e);
      }
    }
    window.addEventListener("keydown", handleEnterKey);
    return () => {
      window.removeEventListener("keydown", handleEnterKey);
    };
  }, []);
  return <div>use-enter</div>;
};

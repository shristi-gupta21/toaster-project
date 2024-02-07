import React, { createContext, useCallback, useState } from "react";
import useKey from "../../hooks/use-key";
export const ToastContext = createContext();
function ToastProvider({ children }) {
  const handleCallback = useCallback(() => {
    setToasts([]);
  }, []);
  useKey("Escape", handleCallback);

  const [toasts, setToasts] = useState([]);
  const createToast = (message, variant) => {
    const newArr = [...toasts];
    newArr.push({ id: crypto.randomUUID(), message, variant });
    setToasts(newArr);
  };
  const dismissToast = (id) => {
    const filteredToast = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToast);
  };
  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

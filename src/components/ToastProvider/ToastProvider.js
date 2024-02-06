import React, { createContext, useState } from "react";
export const ToastContext = createContext();
function ToastProvider({ children }) {
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

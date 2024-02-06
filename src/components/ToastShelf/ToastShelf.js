import React from "react";
import { useContext } from "react";
import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);
  console.log(toasts.length);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            id={toast.id}
          ></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

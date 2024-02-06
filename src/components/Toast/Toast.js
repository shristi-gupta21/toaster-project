import React, { useContext, useEffect } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};
function Toast({ variant, message, id }) {
  const { setToasts, dismissToast } = useContext(ToastContext);
  const Tag = variant ? ICONS_BY_VARIANT[variant] : ICONS_BY_VARIANT["notice"];
  console.log(id);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setToasts([]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [id]);
  return (
    <div className={`${styles.toast} ${styles[variant]}`} role="modal">
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>{message}</p>

      <button className={styles.closeButton} onClick={() => dismissToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;

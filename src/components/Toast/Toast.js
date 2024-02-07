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
  const { dismissToast } = useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  console.log(id);

  return (
    <div className={`${styles.toast} ${styles[variant]}`} role="modal">
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <VisuallyHidden>{variant}</VisuallyHidden>
      <p className={styles.content}>{message}</p>

      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-level="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

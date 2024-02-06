import React, { createContext, useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";
import { useEnter } from "../../hooks/use-enter";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
function ToastPlayground() {
  const { createToast } = useContext(ToastContext);
  const [variant, setVariant] = useState("notice");
  const [message, setMessage] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEnter((e) => {
    onClickPopBtn(e);
  });
  const onClickPopBtn = (e) => {
    e.preventDefault();
    setIsShow(true);
    createToast(message, variant);
    setMessage("");
    setVariant("notice");
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="../../../assets/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {<ToastShelf />}
      <form onSubmit={onClickPopBtn} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  onChange={(e) => setVariant(e.target.value)}
                  checked={variant === option}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

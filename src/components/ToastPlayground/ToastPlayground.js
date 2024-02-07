import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
function ToastPlayground() {
  const { createToast } = useContext(ToastContext);
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = useState("");

  const onClickPopBtn = (e) => {
    e.preventDefault();
    createToast(message, variant);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src={process.env.PUBLIC_URL + "./images/toast.png"}
        />
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
            {VARIANT_OPTIONS.map((option) => {
              let id = `variant-${option}`;
              return (
                <label key={option} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    onChange={(e) => setVariant(e.target.value)}
                    checked={variant === option}
                  />
                  {option}
                </label>
              );
            })}
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

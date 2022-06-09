import { useState } from "react";
import styles from "./styles.module.scss";

const Input = ({ text, id }) => {
  const [clicked, setClicked] = useState(false);
  const [empty, setEmpty] = useState("");

  return (
    <div className={styles.inputGroup}>
      <label
        htmlFor={id}
        className={clicked ? styles.labelOn : styles.labelOff}
        onClick={() => setClicked(!clicked)}
      >
        {text}
      </label>
      {text?.includes("messaggio") ? (
        <textarea
          className={clicked ? styles.textarea : styles.hideInput}
          id={id}
          name={id}
          value={empty}
          onChange={(e) => setEmpty(e.target.value)}
        ></textarea>
      ) : (
        <input
          className={clicked ? styles.input : styles.hideInput}
          type={
            text?.toLowerCase() == "nome" && text?.toLowerCase() == "cognome"
              ? "text"
              : text?.toLowerCase() == "email"
              ? "email"
              : ""
          }
          id={id}
          name={text?.toLowerCase()}
          value={empty}
          onChange={(e) => setEmpty(e.target.value)}
          required
        />
      )}
    </div>
  );
};
export default Input;

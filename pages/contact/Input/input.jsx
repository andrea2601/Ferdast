import styles from "./styles.module.scss";

export const Input = () => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="fname">First name</label>
      <input
        className={styles.input}
        type="text"
        id="fname"
        name="firstname"
        // placeholder="Your name.."
        // required
      />
    </div>
  );
};

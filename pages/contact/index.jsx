import styles from "./styles.module.scss";

export default function contact() {
  return (
    <div>
      <div className={styles.formContainer}>
        <form className={styles.formWrapper}>
          <div className={styles.nameWrapper}>
            <input
              className={styles.input}
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
            />

            <input
              className={styles.input}
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              required
            />
          </div>

          <div className={styles.nameWrapper}>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />

            <select className={styles.select}>
              <option>Italia</option>
              <option>Spagna</option>
              <option>Francia</option>
              <option>Romania</option>
            </select>
          </div>

          <div className={styles.nameWrapper}>
            <textarea
              className={styles.textarea}
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
          </div>

          <button className={styles.arrowBtn}>Send</button>
        </form>
      </div>
    </div>
  );
}

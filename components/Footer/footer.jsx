import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        {/* NEWLETTER SECTION */}
        <section className={styles.Mail}>
          <div className={styles.Form}>
            <h4>Newsletter</h4>
            <form className={styles.InputMail}>
              <input
                type="email"
                placeholder="type your email here ..."
              />
              <input type="submit" value="Send" />
            </form>
            <p className={styles.mailPrivacy}>
              By clicking on "Send" you express your consent to receive the
              ferdast newsletter. Read the privacy policy of Ferdast.
            </p>
          </div>
          <div className={styles.Social}>
            <h4>Follow us!</h4>
            <div className={styles.LogoSocial}>
             
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className={styles.Contact}>
          <h4>Contacts</h4>
          <p>WhatsApp</p>
          <p>Book a call</p>
        </section>

        {/* ABOUT SECTION*/}
        <section className={styles.About}>
          <h4>Ferdast's world</h4>
          <p>About us</p>
          <p>Community</p>
          <p>Partner</p>
        </section>

        {/* PRIVACY SECTION */}
        <section className={styles.Info}>
          <h4>Privacy</h4>
          <p>Terms & conditions</p>
          <p>Cookie policy</p>
          <p>Insurance</p>
        </section>
      </div>
    </footer>
  );
};

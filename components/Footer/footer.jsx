import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  const [clickedContact, setClickedContact] = useState(false);
  const [clickedAbout, setClickedAbout] = useState(false);
  const [clickedPrivacy, setClickedPrivacy] = useState(false);
  const [clickedSocial, setClickedSocial] = useState(false);

  const toggleVisibilityContact = () => {
    if (clickedContact) {
      return setClickedContact(false);
    } else {
      return setClickedContact(true);
    }
  };
  const toggleVisibilityAbout = () => {
    if (clickedAbout) {
      return setClickedAbout(false);
    } else {
      return setClickedAbout(true);
    }
  };
  const toggleVisibilityPrivacy = () => {
    if (clickedPrivacy) {
      return setClickedPrivacy(false);
    } else {
      return setClickedPrivacy(true);
    }
  };
  const toggleVisibilitySocial = () => {
    if (clickedSocial) {
      return setClickedSocial(false);
    } else {
      return setClickedSocial(true);
    }
  };

  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        {/* NEWSLETTER SECTION */}
        <section className={styles.Mail}>
          <div className={styles.Form}>
            <h4>Newsletter</h4>
            <div className={styles.MailBox}>
              <input
                className={styles.InputMail}
                type="email"
                placeholder="email@domain.com"
              />
              <input className={styles.Send} type="submit" value="Invia" />
            </div>
            <p className={styles.mailPrivacy}>
            Cliccando su Invia esprimi il consenso di ricevere le newsletter di Ferdast. 
            Leggi la politica sulla privacy di Ferdast.
            </p>
          </div>
          <div className={styles.Social}>
            <h4 onClick={toggleVisibilitySocial}>Seguici!</h4>
            <div
              className={`${styles.LogoSocial} ${
                clickedSocial ? styles.Show : styles.Hide
              }`}
            >
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className={styles.Contact}>
          <h4 onClick={toggleVisibilityContact}>Contatti</h4>
          <div className={clickedContact ? styles.Show : styles.Hide}>
            <p>WhatsApp</p>
            <p>Prenota una chiamata</p>
          </div>
        </section>

        {/* ABOUT SECTION*/}
        <section className={styles.About}>
          <h4 onClick={toggleVisibilityAbout}>Ferdast s world</h4>
          <div className={clickedAbout ? styles.Show : styles.Hide}>
            <Link href={"/about"}>
              <p>About us</p>
            </Link>
            <p>Community</p>
            <p>Partner</p>
          </div>
        </section>

        {/* PRIVACY SECTION */}
        <section className={styles.Info}>
          <h4 onClick={toggleVisibilityPrivacy}>Privacy</h4>
          <div className={clickedPrivacy ? styles.Show : styles.Hide}>
            <p>Termini e condizioni</p>
            <p>Cookie policy</p>
            <p>Assicurazione</p>
          </div>
        </section>
      </div>
    </footer>
  );
};


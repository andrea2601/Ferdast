import styles from "./styles.module.scss";
import CZImg from "./profileImg/CZimg.jpg";
import CTImg from "./profileImg/CTimg.jpg";
import ALImg from "./profileImg/ALimg.jpg";
import DBImg from "./profileImg/DBimg.jpg";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className={styles.AboutContainer}>
      <h2>Website created and designed by</h2>
      <div className={styles.aboutInfo}>
        <div className={styles.Profile}>
          <Image
            src={ALImg}
            alt="andrea photo"
            width={"300px"}
            height={"300px"}
          />
          <h2>Andrea Lo Giudice</h2>
          <div className={styles.logo}>
            <a
              href="https://www.linkedin.com/in/andreamarialogiudice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/andrea2601"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className={styles.Profile}>
          <Image
            src={CZImg}
            alt="chiara photo"
            width={"300px"}
            height={"300px"}
          />
          <h2>Chiara Zuccaro</h2>
          <div className={styles.logo}>
            <a
              href="https://www.linkedin.com/in/chiara-zuccaro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/ChiaraZuccaro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className={styles.Profile}>
          <Image
            src={DBImg}
            alt="dennis photo"
            width={"300px"}
            height={"300px"}
          />
          <h2>Dennis Badagliacca</h2>
          <div className={styles.logo}>
            <a
              href="https://www.linkedin.com/in/dennisbadagliacca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/ImBlue444"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className={styles.Profile}>
          <Image
            src={CTImg}
            alt="chris photo"
            width={"300px"}
            height={"300px"}
          />
          <h2>Christopher Tarascio</h2>
          <div className={styles.logo}>
            <a
              href="https://www.linkedin.com/in/christopher-tarascio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/chry902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import prova4 from "../../Images/prova4.jpeg";

export const LargeCard = () => {
  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={prova4} alt="ciao" />
      </div>

      <div className={styles.descriptionContainer}>
        <h2 className={styles.h2Title}>Sicilia</h2>

        <p className={styles.paragraph}>
          In Sicilia l’abbiocco in spiaggia ha il gusto di cannoli e arancin* e
          la Prof di latino aveva ragione, la Valle dei Templi è uno spettacolo!
        </p>

        <button>Mare cibo e cultura in Sicilia</button>
      </div>
    </div>
  );
};

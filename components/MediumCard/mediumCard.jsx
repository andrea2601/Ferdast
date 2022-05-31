import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import ClubSicilia from "../Images/ClubSicilia.jpeg";

export const MediumCard = () => {
  return (
    <div className={styles.mediumCardContainer}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={ClubSicilia}
          alt="ciao"
          height={500}
        />
      </div>

      <div className={`${styles.description}`}>
        <h2>kjbju</h2>
        <p>esplora le meraviglie</p>
        <button className={styles.btn}>scopri viaggi</button>
      </div>
    </div>
  );
};

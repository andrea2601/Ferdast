import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import ClubSicilia from "../Images/ClubSicilia.jpeg";

export const SmallCard = () => {
  return (
    <div className={styles.smallCardContainer}>
      <div className={styles.imgContainer}>
        <Image src={ClubSicilia} />
      </div>

      <div className={styles.descriptionContainer}>
        <h2>Sicilia west coast</h2>

        <div className={styles.buttonContainer}>
          <div>
            <span className={styles.price}>560€</span>/persona
          </div>
          <button className={styles.arrowBtn}> ----- </button>
        </div>
      </div>
    </div>
  );
};

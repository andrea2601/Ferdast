import styles from "./styles.module.scss";
// import ClubSicilia from "../Images";
import ClubSicilia from "../Images/ClubSicilia.jpeg";

export const MediumCard = () => {
  return (
    <div className={styles.mediumCardContainer}>
      <img
        className={styles.img}
        src={ClubSicilia}
        alt="ciao"
        height="500px"
        width
      />

      <div className={`${styles.description}`}>
        <h2>kjbju</h2>
        <p>esplora le meraviglie</p>
        <button>scopri viaggi</button>
      </div>
    </div>
  );
};

import styles from "./styles.module.scss";
import { MediumCard } from "../Cards/MediumCard/mediumCard";

export const CardList = () => {
  const itDescript = "Esplora le meraviglie d'italia";
  const img = "italia";
  const espDescript = "Esplora las meravillas de España";
  const fraDescript = "Explorez les merveilles de la France";
  const englDescript = "Explore the wonders of Romania";
  return (
    <div className={styles.cardContiner}>
      <MediumCard name={"Italia"} description={itDescript} img={img} />
      <MediumCard name={"Spagna"} description={espDescript} />
      <MediumCard name={"Francia"} description={fraDescript} />
      <MediumCard name={"Romania"} description={englDescript} />
    </div>
  );
};

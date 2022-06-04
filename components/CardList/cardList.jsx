import styles from "./styles.module.scss";
import { MediumCard } from "../Cards/MediumCard/mediumCard";
import { useVacationContext } from "../../Context/Provider";

export const CardList = () => {

  const {
    state: {italiaImg, spagnaImg, franciaImg, romaniaImg },
  } = useVacationContext();

  const itDescript = "Esplora le meraviglie d'italia";
  const itImg = "";

  const espDescript = "Esplora las meravillas de España";
  const fraDescript = "Explorez les merveilles de la France";
  const englDescript = "Explore the wonders of Romania";
  return (
    <div className={styles.cardContiner}>
      <MediumCard name={"Italia"} description={itDescript} img={italiaImg} />
      <MediumCard name={"Spagna"} description={espDescript} img={spagnaImg}/>
      <MediumCard name={"Francia"} description={fraDescript} img={franciaImg}/>
      <MediumCard name={"Romania"} description={englDescript} img={romaniaImg}/>
    </div>

  );
};

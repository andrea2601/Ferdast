import styles from "./styles.module.scss";
import { MediumCard } from "../Cards/MediumCard/mediumCard";
import { MediumCardSkeleton } from "../Cards/MediumCardSkeleton/mediumCardSkeleton";
import { useVacationContext } from "../../Context/Provider";


export const CardList = () => {


  const {
    state: { loading, italiaImg, russiaImg, franciaImg, usaImg },

  } = useVacationContext();

  const itDescript = "Esplora le meraviglie d'italia";

  const sveDescript = "Esplora le meraviglie di Russia";
  const fraDescript = "Esplora le meraviglie di Francia";
  const usalDescript = "Esplora le meraviglie degli USA";
  return (
    <div className={styles.cardContiner}>
      {loading ?
        <><MediumCardSkeleton />
          <MediumCardSkeleton />
          <MediumCardSkeleton />
          <MediumCardSkeleton />
        </>
        :
        <>
          <MediumCard name={"Italia"} description={itDescript} img={italiaImg} />
          <MediumCard name={"Russia"} description={sveDescript} img={russiaImg} />
          <MediumCard name={"Francia"} description={fraDescript} img={franciaImg} />
          <MediumCard name={"Stati Uniti d'America"} description={usalDescript} img={usaImg} />
        </>
      }
    </div>
  );
};

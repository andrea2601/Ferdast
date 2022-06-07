import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useVacationContext } from "../../Context/Provider";
import { LargeCard } from "../Cards/LargeCard/largeCard";
import { LargeCardSkeleton } from "../Cards/LargeCardSkeleton/largeCardSkeleton";

export const CardListLarge = ({ country }) => {
  const {
    fetchAll,
    state: { vacation, loading },
  } = useVacationContext();

  const par = "/cities";
  useEffect(() => {
    fetchAll(par);
  }, []);

  return (

    <div className={styles.cardLargeContiner}>
      {loading ? <><LargeCardSkeleton/><LargeCardSkeleton/><LargeCardSkeleton/></> :
        vacation
          .filter(
            (item) => item.country.name.toLowerCase() === country?.toLowerCase()
          )
          .map((city) => <LargeCard key={city.id} city={city} />)}
    </div>

  );
};

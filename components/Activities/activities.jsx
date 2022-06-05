import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useVacationContext } from "../../Context/Provider";
import { ActivityCard } from "./ActivityCard/activitycard";

export const Activities = ({ render }) => {
  const {
    fetchCity,
    state: { city },
  } = useVacationContext();
  const par = `/?city_in=${render[0].id}`;
  useEffect(() => {
    fetchCity(par);
    console.log(city.data);
  }, []);
  return (
    <div className={styles.ActivitiesWrap}>
      {city.data
        ? city.data.map((element) => <ActivityCard info={element} />)
        : ""}
    </div>
  );
};

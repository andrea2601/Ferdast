import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useVacationContext } from "../../Context/Provider";
import { ActivityCard } from "./ActivityCard/activitycard";
import { Price } from "../Price/price";
import { useState } from "react";
import { MinCart } from "../MinCart/mincart";

export const Activities = ({ render }) => {
  const [actOn, setActOn] = useState(false);
  const [activity, setActivity] = useState();

  const {
    fetchCity,
    state: { city },
  } = useVacationContext();

  useEffect(() => {
    const par = `/?city_in=${render[0].id}`;
    fetchCity(par);
  }, []);

  useEffect(() => {
    setActivity(city.data);
  }, [city]);

  return (
    <div className={styles.ActivitiesWrap}>
      {activity !== undefined && activity.length !== 0 && actOn == false ? (
        <Price
          id={render}
          giveActivity={activity}
          activityOn={() => setActOn(!actOn)}
        />
      ) : (
        <MinCart />
      )}

      {activity !== undefined && actOn == true
        ? activity.map((element, i) => (
            <ActivityCard info={element} key={i} waiting={100 * i} />
          ))
        : ""}
    </div>
  );
};

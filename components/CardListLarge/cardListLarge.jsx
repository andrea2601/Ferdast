import { MediumCard } from "../Cards/MediumCard/mediumCard";
import { useEffect } from "react";
import { useVacationContext } from "../../Context/Provider"
import { LargeCard } from "../Cards/LargeCard/largeCard";

export const CardList = ({country}) => {
  const {
    fetchAll,
    state: { vacation },
  } = useVacationContext();

  const par = "/cities";
  useEffect(() => {
    fetchAll(par);
  }, []);
  useEffect(() => {
    console.log(vacation);
  }, [vacation]);

  return (
    <>
      {
        vacation && vacation.filter(item => item.country.iso_code === country).map(city => <LargeCard item={city.name} />)
      }

    </>
  );
};

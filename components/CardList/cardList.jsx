import { MediumCard } from "../Cards/MediumCard/mediumCard";

export const CardList = () => {
  return (
    <>
      <MediumCard item={data && data.city.name} />
      <MediumCard item={data && data.city.name} />
      <MediumCard item={data && data.city.name} />
      <MediumCard item={data && data.city.name} />
    </>
  );
};

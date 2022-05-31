import { useEffect, useState } from "react";
import { get } from "../Utils/index";
import { MediumCard } from "../Cards/MediumCard/mediumCard";
import { SmallCard } from "../Cards/SmallCard/smallCard";
import { LargeCard } from "../Cards/LargeCard/LargeCard";

export const CardList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    get().then((data) => setData(data));
    console.log("---->", data);
  }, []);

  return (
    <>
      <MediumCard item={data && data.city.name} />
    </>
  );
};

import { useRouter } from "next/router";
import styles from "./[id].module.scss";
import { Details } from "../../../components/Details/details";
// import {CardListLarge} from '../../components/CardListLarge/cardListLarge';
import { Cart } from "../../../components/Cart/cart";
import { Price } from "../../../components/Price/price";
import { GalleryCityPage } from "../../../components/GalleryCityPage/galleriCityPage";

import { useVacationContext } from "../../../Context/Provider";
import Map from "../../../components/Map/Map";
import { useEffect, useState } from "react";
import { Activities } from "../../../components/Activities/activities";

const DynamicCity = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    fetchAll,
    state: { vacation },
  } = useVacationContext();

  const par = "/cities";
  useEffect(() => {
    fetchAll(par);
  }, []);

  const [city, setCity] = useState();

  useEffect(() => {
    const cityFilter = vacation?.filter((element) =>
      element?.name?.toLowerCase().includes(id?.toLowerCase())
    );
    setCity(cityFilter);
  }, [vacation]);

  return (
    <div className={styles.DynamicCountry}>
      <h1>{id}</h1>
      <section className={styles.GalleryCityPageContainer}>
        <GalleryCityPage id={id} />
      </section>
      <section>
        {/* <CardListLarge country={id}/> */}
        {city !== undefined && city.length !== 0 ? <Price id={city} /> : ""}
        <Details />
      </section>
      <section>
        {city !== undefined && city.length !== 0 ? (
          <Activities render={city} />
        ) : (
          ""
        )}
      </section>

      {/* <Map lng={13} lat={83} /> */}
    </div>
  );
};

export default DynamicCity;

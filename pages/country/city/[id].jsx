import { useRouter } from "next/router";
import styles from "./[id].module.scss";
import { Details } from "../../../components/Details/details";
// import {CardListLarge} from '../../components/CardListLarge/cardListLarge';
import { Cart } from "../../../components/Cart/cart";
import { Price } from "../../../components/Price/price";
import { GalleryCityPage } from "../../../components/GalleryCityPage/galleriCityPage";
import { GalleryCityPageSkeleton } from "../../../components/GalleryCityPageSkeleton/galleriCityPageSkeleton";

import { useVacationContext } from "../../../Context/Provider";
import Map from "../../../components/Map/Map";
import { useEffect, useState } from "react";
import { Activities } from "../../../components/Activities/activities";

const DynamicCity = () => {
  const [city, setCity] = useState();
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const router = useRouter();
  const { id } = router.query;

  const {
    fetchAll,
    state: { vacation, loading },
  } = useVacationContext();

  const par = "/cities";
  useEffect(() => {
    fetchAll(par);
  }, []);

  useEffect(() => {
    const citys = vacation?.filter((element) =>
      element?.name?.toLowerCase().includes(id?.toLowerCase())
    );
    setLong(citys[0]?.longitude);
    setLat(citys[0]?.latitude);
    setCity(citys);
  }, [id, vacation]);

  return (
    <div className={styles.DynamicCountry}>
      <h1>{id}</h1>
      <section className={styles.GalleryCityPageContainer}>
        {loading ? <GalleryCityPageSkeleton /> : <GalleryCityPage id={id} />}
      </section>
      <section>
        {/* {city !== undefined && city.length !== 0 && actOn == false ? (
          <Price
            id={city}
            giveActivity={activity}
            activityOn={toggleActivity}
          />
        ) : (
          ""
        )} */}
        <Details />
      </section>

      <section className={styles.mapContainer}>
        <Map lng={long} lat={lat} />
      </section>
      <section>
        {city !== undefined && city.length !== 0 ? (
          <Activities render={city} />
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default DynamicCity;

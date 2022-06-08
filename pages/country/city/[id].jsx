import Head from "next/head";
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

const DynamicCity = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("city: ", id);

  const {
    fetchAll,
    state: { vacation, loading },
  } = useVacationContext();

  const par = "/cities";
  useEffect(() => {
    fetchAll(par);
  }, []);

  const [long, setLong] = useState();
  const [lat, setLat] = useState();

  useEffect(() => {
    const citys = vacation?.filter((element) =>
      element?.name?.toLowerCase().includes(id?.toLowerCase())
    );
    setLong(citys[0]?.longitude);
    setLat(citys[0]?.latitude);
    console.log("long", long, "lat", lat, citys);
  }, [id, vacation]);

  return (
    <div className={styles.DynamicCountry}>
     <Head>
        <title>Ferdast.com</title>
      </Head>

      <section className={styles.GalleryCityPageContainer}>
        {loading ? <GalleryCityPageSkeleton /> : <GalleryCityPage id={id} />}
      </section>
      <section>
        <h1 className={styles.cityName}>{id}</h1>
        {/* <CardListLarge country={id}/> */}
        <Price />
        <Details />
      </section>

      <section className={styles.mapContainer}>
        <Map lng={long} lat={lat} />
      </section>

    </div>
  );
};

export default DynamicCity;

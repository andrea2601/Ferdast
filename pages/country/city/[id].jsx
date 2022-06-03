import { useRouter } from "next/router";
import styles from "./[id].module.scss";
import { Details } from "../../../components/Details/details";
// import {CardListLarge} from '../../components/CardListLarge/cardListLarge';
import { Cart } from "../../../components/Cart/cart";
import { Price } from "../../../components/Price/price";
import { useVacationContext } from "../../../Context/Provider";
import { GalleryCityPage } from "../../../components/GalleryCityPage/galleriCityPage";
import { useEffect, useState } from "react";

const DynamicCity = () => {
  const router = useRouter();
  const { id } = router.query;
  const [city, setCity] = useState([]);

  const {
    fetchAll,
    state: { vacation, italia, spagna, francia, romania },
  } = useVacationContext();

  useEffect(() => {
    fetchAll("/cities");
  }, []);

  const findState = (list, id) => {
    const filtered = list.filter(
      (element) => element.name.toLowerCase() == id.toLowerCase()
    );
    return filtered;
  };

  useEffect(() => {
    if (city.length === 0) {
      setCity(findState(italia, id));
    } else if (city.length === 0) {
      setCity(findState(spagna, id));
    } else if (city.length === 0) {
      setCity(findState(francia, id));
    } else if (city.length === 0) {
      setCity(findState(romania, id));
    }
  }, [vacation]);

  return (
    <div className={styles.DynamicCountry}>
      <h1>{id}</h1>
      <section className={styles.GalleryCityPageContainer}>
        <GalleryCityPage id={id} />
      </section>
      <section>
        {city.length !== 0 && <Price cityInfo={city} />}
        <Details />
      </section>
    </div>
  );
};

export default DynamicCity;

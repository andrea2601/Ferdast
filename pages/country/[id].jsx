import { useRouter } from "next/router";
import styles from "./[id].module.scss";

import { CardListLarge } from "../../components/CardListLarge/cardListLarge";
import { Hero } from "../../components/Hero/hero";

import { useVacationContext } from "../../Context/Provider";
import { useEffect } from "react";

const DynamicCountry = () => {
  // const {
  //   fetchAll,
  //   state: { vacation, italia, spagna, francia, romania },
  // } = useVacationContext();

  // useEffect(() => {
  //   fetchAll("/cities");
  // }, []);

  const router = useRouter();
  const { id } = router.query;

  const title = `Benvenuto in`;

  return (
    <div className={styles.DynamicCountry}>
      <Hero title={title} subtitle={id} />
      <h1>{id}</h1>
      <div className={styles.DynamicCountry}>
        <CardListLarge country={id} />
      </div>
    </div>
  );
};

export default DynamicCountry;

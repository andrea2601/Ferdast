import { useRouter } from "next/router";
import styles from "./[id].module.scss";


import {CardListLarge} from '../../components/CardListLarge/cardListLarge';
import  {Hero}  from "../../components/Hero/hero";

import { useVacationContext } from "../../Context/Provider";
import { useEffect, useState } from "react";

const DynamicCountry = () => {
  const {
    fetchAll,
    state: { vacation, italia, spagna, francia, romania },
  } = useVacationContext();

  useEffect(() => {
    fetchAll("/cities");
  }, []);
  
  const router = useRouter();
  const { id } = router.query;

  const title = `Benvenuto in`;

  return (
    <div className={styles.DynamicCountry}>
      <Hero title={title} subtitle={id} />
      <h1>
        {id}
      </h1>


//   const [heroImg, setHeroImg] = useState("");

//   useEffect(() => {
//     const imgs = vacation?.filter(
//       (item) => item.country.name.toLowerCase() === id?.toLowerCase()
//     );
//     const i = Math.floor(Math.random() * imgs.length);
//     console.log("imgs: ", imgs);
//     setHeroImg(imgs[i]?.cover_image_url);
//   }, [vacation]);

//   return (
//     <div className={styles.DynamicCountry}>
//       <Hero title={title} subtitle={id} img={heroImg} />


      <CardListLarge country={id} />
    </div>
  );
};

export default DynamicCountry;

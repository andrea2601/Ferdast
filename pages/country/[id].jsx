
import { useRouter } from "next/router";
import styles from "./[id].module.scss";
import { CardListLarge } from '../../components/CardListLarge/cardListLarge';
import { Hero } from "../../components/Hero/hero";
import { useVacationContext } from "../../Context/Provider";
import { useEffect, useState } from "react";

const DynamicCountry = () => {
  const {
    state: { vacation },
  } = useVacationContext();

  const router = useRouter();
  const { id } = router.query;
  // console.log("country: ", id);

  const title = `Benvenuto in`;
  console.log("vacation: ", vacation);

  const [heroImg, setHeroImg] = useState("");

  useEffect(() => {
    const imgs = vacation?.filter((item) => item.country.name.toLowerCase() === id?.toLowerCase());
    const i = Math.floor(Math.random() * imgs.length);
    console.log("imgs: ", imgs);
    setHeroImg(imgs[i]?.cover_image_url);
  }, [vacation])


  
  return (
    <div className={styles.DynamicCountry}>
      <Hero title={title} subtitle={id} img={heroImg}/>
      <h1>
        {id}
      </h1>
      <CardListLarge country={id} />
    </div>
  );
};

export default DynamicCountry;
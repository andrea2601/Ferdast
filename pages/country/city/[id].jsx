import { useRouter } from "next/router";
import styles from "./[id].module.scss";
import { Details } from "../../../components/Details/details";
// import {CardListLarge} from '../../components/CardListLarge/cardListLarge';
import { Cart } from "../../../components/Cart/cart";
import { Price } from "../../../components/Price/price";
import { GalleryCityPage } from "../../../components/GalleryCityPage/galleriCityPage";
// import { useVacationContext } from "../../Context/Provider";

const DynamicCity = () => {
  // const {
  //   state: { italiaImg, spagnaImg, franciaImg, romaniaImg },
  // } = useVacationContext();

  const router = useRouter();
  const { id } = router.query;
  console.log("city: ", id);

  return (
    <div className={styles.DynamicCountry}>
      <section className={styles.GalleryCityPageContainer}>
        <GalleryCityPage id={id} />
      </section>
      <section>
        <h1>{/* {id} */}</h1>
        {/* <CardListLarge country={id}/> */}
        <Price />
        <Details />
      </section>
    </div>
  );
};

export default DynamicCity;

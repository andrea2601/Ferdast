import { useRouter } from "next/router";
import styles from "./[id].module.scss";
import { Details } from "../../../components/Details/details";
// import {CardListLarge} from '../../components/CardListLarge/cardListLarge';
import { Cart } from "../../../components/Cart/cart";
import { Price } from "../../../components/Price/price";

const DynamicCity = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("city: ", id);
  return (
    <div className={styles.DynamicCountry}>
      <h1>{/* {id} */}</h1>
      {/* <CardListLarge country={id}/> */}
      <Price />
      <Details />
    </div>
  );
};

export default DynamicCity;


import { useRouter } from "next/router";
import styles from "./[id].module.scss";
// import {CardListLarge} from '../../components/CardListLarge/cardListLarge';
import {Cart } from "../../../components/Cart/cart"

const DynamicCity = () => {
  const router = useRouter();
  const { id } = router.query;
console.log("city: ",id);
  return (
    <div className={styles.DynamicCountry}>
    <h1>
      {id}
    </h1>
    <Cart/>
      {/* <CardListLarge country={id}/> */}
    </div>
  );
};

export default DynamicCity;
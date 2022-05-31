
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./[id].module.scss";
import CardListLarge from '../../components/CardListLarge/cardListLarge';


const DynamicCountry = () => {
  const router = useRouter();
  const { country } = router.query;

  return (
    <div className={styles.DynamicCountry}>
      <CardListLarge country={country}/>
    </div>
  );
};

export default DynamicCountry;
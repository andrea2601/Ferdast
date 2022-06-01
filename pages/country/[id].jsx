import { useRouter } from "next/router";
import styles from "./[id].module.scss";
import { CardListLarge } from "../../components/CardListLarge/cardListLarge";

const DynamicCountry = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("country: ", id);
  return (
    <div className={styles.DynamicCountry}>
      <h1>{id}</h1>
      <CardListLarge country={id} />
    </div>
  );
};

export default DynamicCountry;

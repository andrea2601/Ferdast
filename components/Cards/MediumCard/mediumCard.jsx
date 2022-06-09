import styles from "./styles.module.scss";
import cardImgMock from "../../Images/cardImgmock.png"
import Link from "next/link";
import { useVacationContext } from "../../../Context/Provider";


export const MediumCard = (props) => {
  const {
    state: { loading },
  } = useVacationContext();
  return (
    <div className={`${styles.mediumCardContainer} `}>
      <div className={styles.imgContainer}>
        <img src={loading ? cardImgMock.src : props.img} alt={"props.name"}/>
      </div>
      <div className={`${styles.description}`}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>

        <Link href={`/country/${props.name}`}>
          <a className={styles.btn}>Scopri viaggi</a>
        </Link>
      </div>
    </div>
  );
};

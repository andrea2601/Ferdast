import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import prova4 from "../../Images/prova4.jpeg";
import Link from "next/link";

export const MediumCard = (props) => {
  return (
    <div className={styles.mediumCardContainer}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={prova4} alt="ciao" height={500} />
      </div>

      <div className={`${styles.description}`}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <Link href={`/country/${props.name}`}>
          <a className={styles.btn}>scopri viaggi</a>
        </Link>
      </div>
    </div>
  );
};

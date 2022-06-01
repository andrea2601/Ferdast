import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import prova4 from "../../Images/prova4.jpeg";
import Link from "next/link";

export const LargeCard = ({ city }) => {
  const name = city.name || "Sicilia";
  const image = city.cover_image_url || { prova4 };
  const descript =city.content || "In Sicilia l’abbiocco in spiaggia ha il gusto di cannoli e arancin* e!";

  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={image} alt="ciao" width="400px" height="150px"/>
      </div>

      <div className={styles.descriptionContainer}>
        <h2 className={styles.h2Title}>{name}</h2>

        <p className={styles.paragraph}>{descript}</p>

        <Link href={`/country/city/${name}`}>
          <a className={styles.btn}>More of {name}</a>
        </Link>
      </div>
      {console.log("city:",city)}
    </div>
  );
};

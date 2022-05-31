import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import prova4 from "../../Images/prova4.jpeg";

export const LargeCard = ({ data }) => {
  const name = data.name || Sicilia;
  const image = data.cover_image_url || { prova4 };
  const descript =
    data.content ||
    "In Sicilia l’abbiocco in spiaggia ha il gusto di cannoli e arancin* e!";

  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={image} alt="ciao" />
      </div>

      <div className={styles.descriptionContainer}>
        <h2 className={styles.h2Title}>{name}</h2>

        <p className={styles.paragraph}>{descript}</p>

        <button>More of {name}</button>
      </div>
    </div>
  );
};

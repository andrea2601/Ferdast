import styles from "./styles.module.scss";
import cardImgMock from "../../Images/cardImgmock.png";
import Link from "next/link";
import { useState } from "react";
import { useVacationContext } from "../../../Context/Provider";

export const LargeCard = ({ city }) => {
  const {
    state: { loading },
  } = useVacationContext();

  const [lat, setLat] = useState(city.latitude);
  const [long, setlong] = useState(city.longitude);

  const name = city.name || "Città";
  const image = loading ? cardImgMock.src : city.cover_image_url;
  const descript =
    city.content ||
    "In Sicilia l’abbiocco in spiaggia ha il gusto di cannoli e arancin* e!";
  const formatMinText = (descript) =>
    descript.split("").slice(0, 800).join("") + "...";

  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt="ciao" className={styles.img} />
      </div>

      <div className={styles.descriptionContainer}>
        <h2 className={styles.h2Title}>{name}</h2>

        <p className={styles.paragraph}>{formatMinText(descript)}</p>

        <Link href={`/country/city/${name}`}>
          <a className={styles.btn}>Più di {name}</a>
        </Link>
      </div>
    </div>
  );
};

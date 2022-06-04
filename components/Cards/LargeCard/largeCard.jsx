import styles from "./styles.module.scss";
// import Image from "next/dist/client/image";
import prova4 from "../../Images/prova4.jpeg";
import Link from "next/link";
import { useState } from "react";

export const LargeCard = ({ city }) => {
  const [lat,setLat]=useState(city.latitude);
  const [long,setlong]=useState(city.longitude);

  const name = city.name || "Sicilia";
  const image = city.cover_image_url || { prova4 };
  const descript =
    city.content ||
    "In Sicilia l’abbiocco in spiaggia ha il gusto di cannoli e arancin* e!";
  const formatMinText = (descript) =>
    descript.split("").slice(0, 500).join("") + "...";


  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt="ciao" className={styles.img} />
      </div>

      <div className={styles.descriptionContainer}>
        <div>
          <h2 className={styles.h2Title}>{name}</h2>

          <p className={styles.paragraph}>{formatMinText(descript)}</p>
        </div>

        <Link href={`/country/city/${name}`}>
          <a className={styles.btn}>More of {name}</a>
        </Link>
        
      </div>
      {console.log("city:", city)}
    </div>
  );
};

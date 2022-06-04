import styles from "./styles.module.scss";

import Link from "next/link";
import { useState } from "react";

export const MediumCard = (props) => {
  // const [img, setImg] = useState();
  // if (props.img == "italia") {
  //   setImg(styles.italia);
  // } else if (props.img == "francia") {
  //   setImg(styles.francia);
  // }
  // const img = "styles.italia";
  return (
    <div className={`${styles.mediumCardContainer} `}>
      <div className={styles.imgContainer}>
        <img src={props.img} alt={props.name} />
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

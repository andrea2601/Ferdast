import styles from "./styles.module.scss";
import { useVacationContext } from "../../Context/Provider";
import { useEffect, useState } from "react";

export const GalleryCityPage = ({ id }) => {
  const {
    state: { vacation, italia, svezia, francia, usa },
  } = useVacationContext();
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const [city] = vacation.filter((item) => item.name.toLowerCase() === id?.toLowerCase());
    const country = city?.country.name;
    let list = [];

    if (country?.toLowerCase() == "svezia") {
      svezia?.forEach((element) => list = [...list, element.cover_image_url]);
    } else if (country?.toLowerCase() == "italia") {
      italia?.forEach((element) => list = [...list, element.cover_image_url]);
    } else if (country?.toLowerCase() == "francia") {
      francia?.forEach((element) => list = [...list, element.cover_image_url]);
    } else if (country?.toLowerCase() == "stati uniti d'america") {
      usa?.forEach((element) => list = [...list, element.cover_image_url]);
    }
    setImgs(list);

    console.log("imgs........", imgs);
    console.log("list........", list);
    console.log("id........", id);
    console.log("country........", city?.country.name);
    console.log("countryreal........", country);
  }, [italia, svezia, francia, usa, id]);

  return (
    <div className={styles.wrapperSquare}>
      <div className={styles.leftSquare}>
        <img src={imgs[0]} />
      </div>

      <div className={styles.rightSquare}>
        <div className={styles.topWrapperSquare}>
          <div className={styles.smLeftSquare}>
            <img src={imgs[1]} />
          </div>

          <div className={styles.smRigtSquare}>
            <img src={imgs[2] || imgs[0]} />
          </div>
        </div>

        <div className={styles.buttomRigSquare}>
          <img src={imgs[3] || imgs[1]} />
        </div>
      </div>
    </div>
  );
};

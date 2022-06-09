import styles from "./styles.module.scss";
import { useVacationContext } from "../../Context/Provider";
import { useEffect, useState } from "react";
import cardImgMock from "../Images/cardImgmock.png";
export const GalleryCityPage = ({ id }) => {
  const {
    state: { vacation, italia, russia, francia, usa },
  } = useVacationContext();
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const [city] = vacation.filter(
      (item) => item.name.toLowerCase() === id?.toLowerCase()
    );
    const country = city?.country.name;
    let list = [];

    if (country?.toLowerCase() == "russia") {

      russia?.forEach((element) => element.name === id ? list = [...list, element.cover_image_url] : null);
      russia?.forEach((element) => element.cover_image_url != list[0] ? list = [...list, element.cover_image_url] : null);
    } else if (country?.toLowerCase() == "italia") {
      italia?.forEach((element) => element.name === id ? list = [...list, element.cover_image_url] : null);
      italia?.forEach((element) => element.cover_image_url != list[0] ? list = [...list, element.cover_image_url] : null);
    } else if (country?.toLowerCase() == "francia") {
      francia?.forEach((element) => element.name === id ? list = [...list, element.cover_image_url] : null);
      francia?.forEach((element) => element.cover_image_url != list[0] ? list = [...list, element.cover_image_url] : null);
    } else if (country?.toLowerCase() == "stati uniti d'america") {
      usa?.forEach((element) => element.name === id ? list = [...list, element.cover_image_url] : null);
      usa?.forEach((element) => element.cover_image_url != list[0] ? list = [...list, element.cover_image_url] : null);

    }
    setImgs(list);
  }, [italia, russia, francia, usa, id]);

  return (
    <div className={styles.wrapperSquare}>
      <div className={styles.leftSquare}>
        <img src={imgs[0] || cardImgMock.src} />
      </div>

      <div className={styles.rightSquare}>
        <div className={styles.topWrapperSquare}>
          <div className={styles.smLeftSquare}>
            <img src={imgs[1] || cardImgMock.src} />
          </div>

          <div className={styles.smRigtSquare}>
            <img src={imgs[2] || cardImgMock.src} />
          </div>
        </div>

        <div className={styles.buttomRigSquare}>
          <img src={imgs[3] || imgs[0] || cardImgMock.src} />
        </div>
      </div>
    </div>
  );
};

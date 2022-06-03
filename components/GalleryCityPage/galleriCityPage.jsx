import styles from "./styles.module.scss";
import { useVacationContext } from "../../Context/Provider";
import { useEffect } from "react";

export const GalleryCityPage = ({ id }) => {
  const {
    state: { vacation },
  } = useVacationContext();

  // useEffect(() => {
  //   const city = vacation.filter((item) => item.name === id);
  //   const country = vacation.filter(
  //     (item) => item.country.name === city.country?.name
  //   );
  //   console.log("---->", country);
  // }, [vacation]);

  return (
    <div className={styles.wrapperSquare}>
      <div className={styles.leftSquare}>
        <img src="https://picsum.photos/536/354" />
      </div>

      <div className={styles.rightSquare}>
        <div className={styles.topWrapperSquare}>
          <div className={styles.smLeftSquare}>
            <img src="https://picsum.photos/536/354" />
          </div>

          <div className={styles.smRigtSquare}>
            <img src="https://picsum.photos/536/354" />
          </div>
        </div>

        <div className={styles.buttomRigSquare}>
          <img src="https://picsum.photos/536/354" />
        </div>
      </div>
    </div>
  );
};

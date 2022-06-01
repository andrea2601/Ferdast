import styles from "./styles.module.scss";
// import Image from "next/dist/client/image";
import prova4 from "../../Images/prova4.jpeg";

export const LargeCard = ({ city }) => {
  const name = city.name || "Sicilia";
  const image = city.cover_image_url || { prova4 };
  const descript =
    city.content ||
    "In Sicilia l’abbiocco in spiaggia ha il gusto di cannoli e arancin* e!";
  const formatMinText = (descript) =>
    descript.split("").slice(0, 600).join("") + "...";
  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt="ciao" className={styles.img} />
      </div>

      <div className={styles.descriptionContainer}>
        <h2 className={styles.h2Title}>{name}</h2>

        <p className={styles.paragraph}>{formatMinText(descript)}</p>
        <div className={styles.Map}>
        <iframe width="325" height="280" frameBorder="0" src={`https://www.bing.com/maps/embed?h=280&w=325&cp=${city.latitude}~${city.longitude}&lvl=7.749020487297179&typ=d&sty=r&src=SHELL&FORM=MBEDV8`} scrolling="no"></iframe>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>More of {name}</button>
        </div>
      </div>
        
      {console.log("city:", city)}
    </div>
  );
};

import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import heroImg from "../Images/heroImg.png";
export const Hero = (prop) => {
  const title = prop.title || "Vivi viaggi unici al mondo...";
  const subtitle = prop.subtitle || "...e incontra nuovi amici";
  const img = prop.img || heroImg;
  return (
    <div className={styles.Hero}>
      <div className={styles.img}>
        <div className={styles.Overlay}></div>
        <Image src={img} alt="heroImg" layout="fill" />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
};

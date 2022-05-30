import styles from "./styles.module.scss";
import Image from 'next/dist/client/image'
import heroImg from "../Images/heroImg.jpg"
export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.img}>
        <Image src={heroImg} alt="heroImg" layout="fill"/>
      </div>
      <h1 className={styles.title}>Vivi viaggi unici al mondo...</h1> 
      <h2 className={styles.subtitle}>...e incontra nuovi amici</h2> 
      <button className={styles.btn}>Scopri tutti i viaggi</button>
    </div>
  );
};

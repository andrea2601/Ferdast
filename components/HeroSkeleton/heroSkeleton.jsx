import styles from "./styles.module.scss";

export const HeroSkeleton = () => {
  
  return (
    <div className={styles.Hero}>
      <div className={styles.img}>
        <div className={styles.Overlay}></div>
      </div>
      <div className={styles.title}></div>
      <div className={styles.subtitle}></div>
    </div>
  );
};


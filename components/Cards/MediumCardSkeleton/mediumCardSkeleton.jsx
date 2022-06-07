import styles from "./styles.module.scss";

export const MediumCardSkeleton = () => {

  return (
    <div className={`${styles.mediumCardContainer} `}>
      <div className={styles.imgContainer}>
        <div className={styles.img}></div>
      </div>
      <div className={`${styles.description}`}>
        <div className={styles.h2Element}></div>
        <div className={styles.paragraph}></div>
          <div className={styles.btnSk}></div>
      </div>
    </div>
  );
};

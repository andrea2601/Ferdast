import styles from "./styles.module.scss";


export const LargeCardSkeleton = () => {
  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.img}>

        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div>
          <div className={styles.h2Title}></div>

          <div className={styles.paragraph}></div>
        </div>

          <div className={styles.btnSk}></div>
        

      </div>
    </div>
  );
};

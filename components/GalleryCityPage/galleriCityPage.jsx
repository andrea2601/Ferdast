import styles from "./styles.module.scss";

export const GalleryCityPage = () => {
  return (
    <div className={styles.wrapperSquare}>
      <div className={styles.leftSquare}></div>

      <div className={styles.rightSquare}>
        <div className={styles.topWrapperSquare}>
          <div className={styles.smLeftSquare}></div>

          <div className={styles.smRigtSquare}></div>
        </div>

        <div className={styles.buttomRigSquare}></div>
      </div>
    </div>
  );
};

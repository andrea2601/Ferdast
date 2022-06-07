import styles from "./styles.module.scss";

export const GalleryCityPageSkeleton = () => {
  

  return (
    <div className={styles.wrapperSquare}>
      <div className={styles.leftSquare}>
        <div className={styles.img}></div> 
      </div>

      <div className={styles.rightSquare}>
        <div className={styles.topWrapperSquare}>
          <div className={styles.smLeftSquare}>
          <div className={styles.img}></div> 
          </div>

          <div className={styles.smRigtSquare}>
          <div className={styles.img}></div> 
          </div>
        </div>

        <div className={styles.buttomRigSquare}>
        <div className={styles.img}></div> 
        </div>
      </div>
    </div>
  );
};

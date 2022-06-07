import styles from "./styles.module.scss";

export const HeroSkeleton = () => {

  return (
    <div className={styles.Hero}>
      <div className={styles.titleBox}>
        <div className={styles.title}></div>
      </div>
      <div className={styles.subtitle}></div>
    </div>
  );
};


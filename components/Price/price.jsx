import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import styles from "./styles.module.scss";

export const Price = ({ id }) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    if (expand) {
      return setExpand(false);
    } else {
      return setExpand(true);
    }
  };

  return (
    <>
      <div
        className={`${styles.Side} ${expand ? styles.Stop : ""}`}
        onClick={toggleExpand}
      >
        {expand ? <HiChevronDoubleRight /> : <HiChevronDoubleLeft />}
      </div>
      <div className={expand ? styles.PriceContainer : styles.Hide}>
        <div className={styles.H2Contain}>
          <h2>{id.length !== 0 ? id[0].name : "Loading"}</h2>
        </div>
        <p>
          From <span>{/*PRICE*/} 330$</span>
        </p>
        <button className={styles.btn}>Find out activities</button>
      </div>
    </>
  );
};

import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useEffect } from "react";
import styles from "./styles.module.scss";

export const Price = ({ id, giveActivity }) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    if (expand) {
      return setExpand(false);
    } else {
      return setExpand(true);
    }
  };
  const bestPrice = () => {
    const best = 1000000;
    if (giveActivity !== undefined && giveActivity.lenght !== 0) {
      best = giveActivity.filter(
        (el) => parseInt(el.retail_price.formatted_value.split("€")) < best
      );
      console.log(best);
      return best;
    } else {
      console.log("false");
    }
  };
  console.log(giveActivity);
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
          From{" "}
          <span>
            {/*PRICE*/} {bestPrice}
          </span>
        </p>
        <button className={styles.btn}>Find out activities</button>
      </div>
    </>
  );
};

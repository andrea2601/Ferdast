import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useEffect } from "react";
import styles from "./styles.module.scss";

export const Price = ({ id, giveActivity, activityOn }) => {
  const [expand, setExpand] = useState(false);
  const price = giveActivity || "...";
  console.log(giveActivity);
  const toggleExpand = () => {
    if (expand) {
      return setExpand(false);
    } else {
      return setExpand(true);
    }
  };
  const bestPrice = (value) => {
    if (value !== undefined) {
      const best = value[0].retail_price.formatted_value.split("€").join("");
      for (let i = 0; i < value.length; i++) {
        console.log(
          parseInt(value[i].retail_price.formatted_value.split("€").join("")) <
            parseInt(best)
        );
        if (
          parseInt(value[i].retail_price.formatted_value.split("€").join("")) <
          parseInt(best)
        ) {
          best = value[i].retail_price.formatted_value;
          console.log("condizione vera", best);
        }
        return best;
      }
    } else {
      return "loading";
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
          <span>
            {/*PRICE*/}
            {parseInt(bestPrice(price !== "..." ? price : undefined)) == 0
              ? "Free activity available!"
              : `From ${parseInt(bestPrice(price))} €`}{" "}
          </span>
        </p>
        <button className={styles.btn} onClick={activityOn}>
          Find out activities
        </button>
      </div>
    </>
  );
};

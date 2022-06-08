import { useState } from "react";
import Link from "next/link";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import styles from "./styles.module.scss";

export const Price = ({ id, giveActivity, activityOn }) => {
  const [expand, setExpand] = useState(false);
  const price = giveActivity;

  const bestPrice = (value) => {
    if (value !== undefined) {
      return Math.min(
        ...value.map((activity) => parseInt(activity.retail_price.value))
      );
    } else {
      return "loading";
    }
  };

  return (
    <>
      <div
        className={`${styles.Side} ${expand ? styles.Stop : ""}`}
        onClick={() => setExpand(!expand)}
      >
        {expand ? <HiChevronDoubleRight /> : <HiChevronDoubleLeft />}
      </div>
      <div className={expand ? styles.PriceContainer : styles.Hide}>
        <div className={styles.H2Contain}>
          <h2>
            {id !== undefined && id.length !== 0 ? id[0].name : "Loading"}
          </h2>
        </div>
        <p>
          <span>
            {/*PRICE*/}
            {parseInt(bestPrice(price !== "..." ? price : undefined)) == 0
              ? "Attività gratis disponibili!"
              : `A partire da ${bestPrice(price)} €`}{" "}
          </span>
        </p>
        <Link href="#top">
          <a>
            <button className={styles.btn} onClick={activityOn}>
              Scopri le opportunità
            </button>
          </a>
        </Link>
      </div>
    </>
  );
};

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import styles from "./styles.module.scss";
import { useVacationContext } from "../../Context/Provider";

export const Price = () => {
  // const router = useRouter();
  const {
    fetchCity,
    state: { city },
  } = useVacationContext();

  useEffect(() => {
    fetchCity;
  }, []);

  useEffect(() => {
    console.log("price", city);
  }, [city]);
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
        <div className={styles.H2Contain}>{/* <h2>{id}</h2> */}</div>
        <p>
          From <span>{/*PRICE*/} 330$</span>
        </p>
        <button className={styles.btn}>Find out availability</button>
      </div>
    </>
  );
};

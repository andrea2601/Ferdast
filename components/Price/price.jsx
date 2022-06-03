import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import styles from "./styles.module.scss";
import { useVacationContext } from "../../Context/Provider";

export const Price = ({ cityInfo }) => {
  const [expand, setExpand] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  // const {
  //   fetchCity,
  //   state: { city },
  // } = useVacationContext();

  // // console.log(cityInfo);

  const toggleExpand = () => {
    if (expand) {
      return setExpand(false);
    } else {
      return setExpand(true);
    }
  };

  // useEffect(() => {
  //   fetchCity("/");
  //   // console.log(city);
  // }, []);

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
          <h2>{id}</h2>
        </div>
        <p>
          From <span>{/*PRICE*/} 330$</span>
        </p>
        <button className={styles.btn}>Find out availability</button>
      </div>
    </>
  );
};

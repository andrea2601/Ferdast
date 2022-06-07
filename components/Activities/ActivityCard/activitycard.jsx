import styles from "./styles.module.scss";
import { GrGroup } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export const ActivityCard = ({ info }) => {
  const [expand, setExpand] = useState(false);
  return {
    ...(info.about !== "TBD" ? (
      <div
        className={`${styles.ActivityCardContainer} ${
          expand ? styles.fix : ""
        }`}
      >
        <h2>{info.title}</h2>

        <div className={styles.Categories}>
          {info.categories.map((el, i) => (
            <p key={i}>{el.name.toLowerCase()}</p>
          ))}
        </div>
        <div className={styles.descriptionExpand}>
          <p>
            {expand !== true
              ? `${info.about.split("").splice(0, 200).join("")} ...`
              : info.about}
          </p>
          <span onClick={() => setExpand(!expand)}>
            <AiOutlineDown className={expand ? styles.reduce : styles.expand} />
          </span>
        </div>

        <h3>
          {parseInt(info.retail_price.formatted_value.split("€").join("")) === 0
            ? "For free!"
            : info.retail_price.formatted_value}
        </h3>
        <div className={styles.kind}>
          {/* {info.group_size.lenght !== 0 &&
          info.group_size !== undefined &&
          info.group_size[0].name.toLowerCase().includes("gruppo") ? (
            <GrGroup />
          ) : (
            <BsPerson />
          )}
          <p>{info.group_size[0].name}</p> */}
        </div>

        <button className={styles.btn}>Aggiungi al carrello</button>
      </div>
    ) : (
      <></>
    )),
  };
};

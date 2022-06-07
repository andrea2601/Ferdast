import styles from "./styles.module.scss";
import { GrGroup } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { ButtonAdd } from "../../MinCart/buttonAdd/buttonadd";
import { useVacationContext } from "../../../Context/Provider";
import { AiOutlineDown } from "react-icons/ai";

export const ActivityCard = ({ info }) => {
  const [expand, setExpand] = useState(false);

  const {
    addToCart,
    state: { cart },
  } = useVacationContext();

  return {
    ...(info.about !== "TBD" ? (
      <>
        <div className={expand ? styles.overlay : styles.hide}></div>
        <div
          className={`${styles.ActivityCardContainer} ${
            expand ? styles.fix : ""
          }`}
        >
          <div className={styles.fixInfo}>
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
                <AiOutlineDown
                  className={expand ? styles.reduce : styles.expand}
                />
              </span>
            </div>

            <h3>
              {parseInt(
                info.retail_price.formatted_value.split("€").join("")
              ) === 0
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

            {/* <button
              className={styles.btn}
              onClick={() =>
                addToCart({
                  activity: info.title,
                  price: info.retail_price.value,
                })
              }
            >
              Aggiungi al carrello
            </button> */}
            <ButtonAdd />
          </div>
        </div>
      </>
    ) : (
      <></>
    )),
  };
};

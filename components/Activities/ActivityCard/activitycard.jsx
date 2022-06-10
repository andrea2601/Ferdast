import styles from "./styles.module.scss";
import { GrGroup } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { FaBox } from "react-icons/fa";
// import { ButtonAdd } from "../../MinCart/buttonAdd/buttonadd";
import { useVacationContext } from "../../../Context/Provider";
import { AiOutlineDown } from "react-icons/ai";

export const ActivityCard = ({ info }) => {
  const [expand, setExpand] = useState(false);
  const [add, setAdd] = useState(false);

  const {
    addToCart,
    state: { cart },
  } = useVacationContext();

  useEffect(() => {
    setAdd(cart.some((item) => item.id == info.uuid));
  }, [cart]);

  const animationAdd = () => {
    addToCart({
      activity: info.title,
      price: info.retail_price.value,
      id: info.uuid,
    });
    setAdd(true);
  };

  return (
    <>
      <div className={expand ? styles.overlay : styles.hide}></div>
      <div
        className={`${styles.ActivityCardContainer} ${
          expand ? styles.fix : ""
        }`}
      >
        <div className={styles.fixInfo}>
          <h2>{info.title}</h2>

          <div
            className={
              info.categories.length !== 0 ? styles.Categories : styles.hide
            }
          >
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
            {parseInt(info.retail_price.formatted_value.split("€").join("")) ===
            0
              ? "For free!"
              : info.retail_price.formatted_value}
          </h3>

          <button
            className={`${styles.cartButton} ${add ? styles.clicked : ""}`}
            onClick={animationAdd}
            disabled={add}
          >
            <span className={styles.addCart}>Aggiungi al carrello</span>
            <span className={styles.added}>Aggiunto!</span>
            <FiShoppingCart className={styles.cartIcon} />
            <FaBox className={styles.cartItem} />
          </button>
        </div>
      </div>
    </>
  );
};

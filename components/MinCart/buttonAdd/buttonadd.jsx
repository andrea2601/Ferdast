import styles from "./styles.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { FaBox } from "react-icons/fa";
import { BsBoxSeam, BsCartFill } from "react-icons/bs";
import { useState } from "react";
export const ButtonAdd = () => {
  const [add, setAdd] = useState(false);

  setTimeout(() => setAdd(false), 5000);

  return (
    <button
      className={`${styles.cartButton} ${add ? styles.clicked : ""}`}
      onClick={() => setAdd(!add)}
    >
      <span className={styles.addCart}>Aggiungi al carrello</span>
      <span className={styles.added}>Aggiunto!</span>
      <FiShoppingCart className={styles.cartIcon} />
      <FaBox className={styles.cartItem} />
    </button>
  );
};

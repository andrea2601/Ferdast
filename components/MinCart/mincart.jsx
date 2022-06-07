import styles from "./styles.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export const MinCart = () => {
  return (
    <div className={styles.MinCartwrapper}>
      <FiShoppingCart />
    </div>
  );
};

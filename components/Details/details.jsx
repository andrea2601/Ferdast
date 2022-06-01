import styles from "./styles.module.scss";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineDollar,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { TbCarOff, TbPlaneOff, TbHeadphones } from "react-icons/tb";
import { useState } from "react";

export const Details = () => {
  const [clickIncluded, setClickedIncluded] = useState(false);
  const [clickExcluded, setClickedExcluded] = useState(false);

  const toggleIncluded = () => {
    if (clickIncluded) {
      return setClickedIncluded(false);
    } else {
      return setClickedIncluded(true);
    }
  };
  const toggleExcluded = () => {
    if (clickExcluded) {
      return setClickedExcluded(false);
    } else {
      return setClickedExcluded(true);
    }
  };

  return (
    <div className={styles.DetailsContainer}>
      <div className={styles.OnlyFor}>
        <AiOutlineInfoCircle />
        <p>Our trip are an exclusive for people over the age of 55 years</p>
      </div>
      <div className={styles.Included}>
        {/* INCLUDED ITEMS */}
        <div onClick={toggleIncluded} className={styles.ElementsContainer}>
          <div className={styles.TopElements}>
            <h3>What is it included?</h3>
            {clickIncluded ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>

          <div className={clickIncluded ? styles.Elements : styles.Hide}>
            <div className={styles.SingleEl}>
              <BiBuildings />
              <p>7 notti in camera doppia, tripla o quadrupla</p>
            </div>
            <div className={styles.SingleEl}>
              <RiRefund2Fill />
              <p>Rimborso al 100% a causa di restrizioni Covid</p>
            </div>
            <div className={styles.SingleEl}>
              <MdOutlineFreeBreakfast />
              <p>Prima colazione</p>
            </div>
            <div className={styles.SingleEl}>
              <TbHeadphones />
              <p>Assistenza Ferdast</p>
            </div>
          </div>
        </div>

        {/* EXCLUDED ITEMS */}
        <div onClick={toggleExcluded} className={styles.ElementsContainer}>
          <div className={styles.TopElements}>
            <h3>What is it excluded?</h3>
            {clickExcluded ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
          <div className={clickExcluded ? styles.Elements : styles.Hide}>
            <div className={styles.SingleEl}>
              <TbPlaneOff />
              <p>Il volo (richiedi un extra nel carrello)</p>
            </div>
            <div className={styles.SingleEl}>
              <AiOutlineDollar />
              <p>Eventuale tassa di soggiorno</p>
            </div>
            <div className={styles.SingleEl}>
              <TbCarOff />
              <p>Auto o noleggio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

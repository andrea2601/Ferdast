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
import { GiPartyPopper, GiAncientColumns } from "react-icons/gi";
import { TbCarOff, TbPlaneOff, TbHeadphones, TbBeach } from "react-icons/tb";
import { BsFillBinocularsFill } from "react-icons/bs";
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
        <p>Our trip are exclusive for people over the age of 55 years</p>
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
              <p>7 nights in a double room, triple or a family room</p>
            </div>
            <div className={styles.SingleEl}>
              <RiRefund2Fill />
              <p>Refund of 100% of entire amount</p>
            </div>
            <div className={styles.SingleEl}>
              <MdOutlineFreeBreakfast />
              <p>Breakfast</p>
            </div>
            <div className={styles.SingleEl}>
              <TbHeadphones />
              <p>Ferdast s Assistance</p>
            </div>
          </div>
          <div className={styles.border}></div>
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
              <p>Flight (you can select it in the extra options in the cart)</p>
            </div>
            <div className={styles.SingleEl}>
              <AiOutlineDollar />
              <p>Local taxes</p>
            </div>
            <div className={styles.SingleEl}>
              <TbCarOff />
              <p>Car or leasing</p>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>

        {/* WAITING FOR YOU */}
        <div>
          <h3>Waiting for you</h3>
          <div className={styles.WaitingElements}>
            <div className={styles.BoxWait}>
              <div className={styles.SingleIcon}>
                <TbBeach />
              </div>
              <p>Relax</p>
            </div>
            <div className={styles.BoxWait}>
              <div className={styles.SingleIcon}>
                <GiPartyPopper />
              </div>
              <p>Party</p>
            </div>
            <div className={styles.BoxWait}>
              <div className={styles.SingleIcon}>
                <BsFillBinocularsFill />
              </div>
              <p>Adventure</p>
            </div>
            <div className={styles.BoxWait}>
              <div className={styles.SingleIcon}>
                <GiAncientColumns />
              </div>
              <p>Culture</p>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>
      </div>
    </div>
  );
};

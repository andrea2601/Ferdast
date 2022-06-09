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

  return (
    <div className={styles.DetailsContainer}>
      <div className={styles.OnlyFor}>
        <AiOutlineInfoCircle />
        <p>I nostri viaggi sono esclusivamente studiati per gli over 55</p>
      </div>
      <div className={styles.Included}>
        {/* INCLUDED ITEMS */}
        <div
          onClick={() => setClickedIncluded(!clickIncluded)}
          className={styles.ElementsContainer}
        >
          <div className={styles.TopElements}>
            <h3>Cosa è incluso</h3>
            {clickIncluded ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>

          <div className={clickIncluded ? styles.Elements : styles.Hide}>
            <div className={styles.SingleEl}>
              <BiBuildings />
              <p>7 notti in una camera doppia, tripla o quadrupla </p>
            </div>
            <div className={styles.SingleEl}>
              <RiRefund2Fill />
              <p>Rimborso del 100% della spesa</p>
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
          <div className={styles.border}></div>
        </div>

        {/* EXCLUDED ITEMS */}
        <div
          onClick={() => setClickedExcluded(!clickExcluded)}
          className={styles.ElementsContainer}
        >
          <div className={styles.TopElements}>
            <h3>Cosa è escluso</h3>
            {clickExcluded ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
          <div className={clickExcluded ? styles.Elements : styles.Hide}>
            <div className={styles.SingleEl}>
              <TbPlaneOff />
              <p>Volo (puoi selezionarlo come opzione extra nel carrello)</p>
            </div>
            <div className={styles.SingleEl}>
              <AiOutlineDollar />
              <p>Tasse locali di soggiorno</p>
            </div>
            <div className={styles.SingleEl}>
              <TbCarOff />
              <p>Macchina</p>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>

        {/* WAITING FOR YOU */}
        <div>
          <h3>Cosa ti aspetta</h3>
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
              <p>Feste</p>
            </div>
            <div className={styles.BoxWait}>
              <div className={styles.SingleIcon}>
                <BsFillBinocularsFill />
              </div>
              <p>Avventure</p>
            </div>
            <div className={styles.BoxWait}>
              <div className={styles.SingleIcon}>
                <GiAncientColumns />
              </div>
              <p>Cultura</p>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>
      </div>
    </div>
  );
};

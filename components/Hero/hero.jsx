import styles from "./styles.module.scss";
import Image from "next/dist/client/image";
import heroImg from "../Images/heroImg.png";
import heroImgMock from "../Images/heroImgmock.png";
import { useState, useEffect } from "react";
import { useVacationContext } from "../../Context/Provider";

export const Hero = (prop) => {
  const title = prop.title || "Vivi viaggi unici al mondo...";
  const subtitle = prop.subtitle || "...e incontra nuovi amici";
  const {
    state: { italiaImg, spagnaImg, franciaImg, romaniaImg },
  } = useVacationContext();

  const [img, setImg] = useState(heroImgMock);
  const setImgFun = () => {
    if (subtitle !== "...e incontra nuovi amici") {
      switch (subtitle.toLowerCase()) {
        case "italia": {
          setImg(italiaImg ? italiaImg : heroImgMock);
          break
        }
        case "spagna": {
          setImg(spagnaImg ? spagnaImg : heroImgMock);
          break
        }
        case "francia": {
          setImg(franciaImg ? franciaImg : heroImgMock);
          break
        }
        case "romania": {
          setImg(romaniaImg ? romaniaImg : heroImgMock);
          break
        }
        default: {
          setImg(heroImgMock)
        }
      }
    } else { setImg(heroImg) }
  }


  useEffect(() => {
    setImgFun();
  }, [subtitle, italiaImg, franciaImg, spagnaImg, romaniaImg])



  return (
    <div className={styles.Hero}>
      <div className={styles.img}>
        <div className={styles.Overlay}></div>
        <Image src={img} alt="heroImg" layout="fill" />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
};


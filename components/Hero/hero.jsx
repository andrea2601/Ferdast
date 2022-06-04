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
  const pop = () => {
    if (subtitle !== "...e incontra nuovi amici") {
      switch (subtitle) {
        case "Italia": {
          setImg(italiaImg ? italiaImg : heroImgMock);
          break
        }
        case "Spagna": {
          setImg(spagnaImg ? spagnaImg : heroImgMock);
          break
        }
        case "Francia": {
          setImg(franciaImg ? franciaImg : heroImgMock);
          break
        }
        case "Romania": {
          setImg(romaniaImg ? romaniaImg : heroImgMock);
          break
        }
        // case "Spagna": {
        //   imgs = spagnaImg;
        //   break
        // }
        // case "Francia": {
        //   imgs = franciaImg;
        //   break
        // }
        // case "Romania": {
        //   imgs = romaniaImg;
        //   break
        // }
        default: {
          setImg(heroImgMock)
        }
      }
      // const i = Math.floor(Math.random() * imgs.length);
      // console.log("imgs....: ", imgs);
      // console.log("sub....: ", subtitle);
      // console.log("img[i]....: ", imgs[i]?.cover_image_url);
      // imgs[i]?.cover_image_url ? setImg(imgs[i].cover_image_url): setImg(heroImgMock);
    } else { setImg(heroImg) }
  }


  useEffect(() => {
    pop();
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


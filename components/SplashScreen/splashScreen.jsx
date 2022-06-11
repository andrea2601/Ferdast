import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../Images/logo.png";
import { useEffect, useState } from "react";
const SpalshScreen = () => {
  const [splashHide, setSplashHide] = useState(false);
  const [splashOpacity, setSplasOpacity] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setSplasOpacity(true)
    }
      , 5000
    )
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSplashHide(true)
    }
      , 6000
    )
  }, []);
  return (
    <div className={`${styles.SplashScreen} ${splashHide ? styles.hide : null} ${splashOpacity ? styles.opacity : null}`}>
      <img src={logo.src} alt="logo" />
      <div className={styles.spinner}></div>
    </div>
  );
};
export default SpalshScreen;

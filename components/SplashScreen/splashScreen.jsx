import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../Images/logo.png";

const SpalshScreen = () => {
  
  return (
    <div className={styles.SplashScreen}>
      <img src={logo.src} alt="logo" />
      <div className={styles.spinner}></div>
    </div>
  );
};
export default SpalshScreen;

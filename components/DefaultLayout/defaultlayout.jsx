import { Footer } from "../Footer/footer";
import  Navbar  from "../Navbar/index";
import styles from "./styles.module.scss";

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.PageContainer}>
      <Navbar/>
      {children}

      <Footer />
    </div>
  );
};

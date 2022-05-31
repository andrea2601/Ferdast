import { Footer } from "../Footer/footer";
import styles from "./styles.module.scss";

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.PageContainer}>
      {/* NAVBAR HERE */}
      {children}

      <Footer />
    </div>
  );
};

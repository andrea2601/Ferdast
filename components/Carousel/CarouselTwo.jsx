import Carousel from "better-react-carousel";
import styles from "./styles.module.scss";

export default function CarouselTwo() {
  return (
    <div className={styles.CarouselTwo}>
      <h2>Best Seller</h2>
      <Carousel cols={4} rows={1} gap={50} loop>
        <Carousel.Item>
          <div className={styles.card}>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
            <h2>sanhjbudsakjindsanji</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.card}>
            <img width="100%" src="https://picsum.photos/800/600?random=2" />
            <h2>sanhjbudsakjindsanji</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.card}>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
            <h2>sanhjbudsakjindsanji</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.card}>
            <img width="100%" src="https://picsum.photos/800/600?random=4" />
            <h2>sanhjbudsakjindsanji</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.card}>
            <img width="100%" src="https://picsum.photos/800/600?random=5" />
            <h2>sanhjbudsakjindsanji</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.card}>
            <img width="100%" src="https://picsum.photos/800/600?random=6" />
            <h2>sanhjbudsakjindsanji</h2>
          </div>
        </Carousel.Item>
        {/* ... */}
      </Carousel>
    </div>
  );
}

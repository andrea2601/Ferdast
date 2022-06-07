import Carousel from "better-react-carousel";
import styles from "./styles.module.scss";

export default function CarouselTwo() {
  return (
    <div className={styles.CarouselTwo}>
      <h2>Best Seller</h2>
      <div className={styles.carouselContaner}>
        <Carousel cols={3} rows={1} gap={20} loop={false} mobileBreakpoint={0}>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=1" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=2" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=3" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=4" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=5" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=6" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=7" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=8" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=9" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=10" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=11" />
              <h2>sanhjbudsakjindsanji</h2>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

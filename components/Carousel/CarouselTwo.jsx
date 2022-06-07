import Carousel from "better-react-carousel";
import styles from "./styles.module.scss";

export default function CarouselTwo() {
  return (
    <div className={styles.CarouselTwo}>
      <h2>Best Seller</h2>
<<<<<<< HEAD
      <div className={styles.carouselContaner}>
        <Carousel cols={3} rows={1} gap={20} loop={false} mobileBreakpoint={0}>
          <Carousel.Item>
            <div className={styles.card}>
              <img src="https://picsum.photos/800/600?random=1" />
              <h2>sanhjbudsakjindsanji</h2>
=======
      <div className={styles.CarouselWrapper}>
        <Carousel
          responsiveLayout={[
            {
              breakpoint: 1666,
              cols: 2,
              rows: 1,
              gap: 50,
              loop: true,
            },
            {
              breakpoint: 1440,
              cols: 2,
              rows: 1,
              gap: 50,
              loop: true,
            },
            {
              breakpoint: 1105,
              cols: 1,
              rows: 1,
              gap: 0,
              loop: true,
            },
          ]}
          cols={3}
          rows={1}
          gap={50}
          mobileBreakpoint={0}
          loop
        >
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" src="https://picsum.photos/800/600?random=1" />
              <h2>Lorem ipsum dolor sit amet</h2>
>>>>>>> 9c45221ba62a96829b1d93017f889dddd4c2817a
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
<<<<<<< HEAD
              <img src="https://picsum.photos/800/600?random=2" />
              <h2>sanhjbudsakjindsanji</h2>
=======
              <img width="100%" src="https://picsum.photos/800/600?random=2" />
              <h2>Lorem ipsum dolor sit amet</h2>
>>>>>>> 9c45221ba62a96829b1d93017f889dddd4c2817a
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
<<<<<<< HEAD
              <img src="https://picsum.photos/800/600?random=3" />
              <h2>sanhjbudsakjindsanji</h2>
=======
              <img width="100%" src="https://picsum.photos/800/600?random=3" />
              <h2>Lorem ipsum dolor sit amet</h2>
>>>>>>> 9c45221ba62a96829b1d93017f889dddd4c2817a
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
<<<<<<< HEAD
              <img src="https://picsum.photos/800/600?random=4" />
              <h2>sanhjbudsakjindsanji</h2>
=======
              <img width="100%" src="https://picsum.photos/800/600?random=4" />
              <h2>Lorem ispsum dolor sit amet</h2>
>>>>>>> 9c45221ba62a96829b1d93017f889dddd4c2817a
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
<<<<<<< HEAD
              <img src="https://picsum.photos/800/600?random=5" />
              <h2>sanhjbudsakjindsanji</h2>
=======
              <img width="100%" src="https://picsum.photos/800/600?random=5" />
              <h2>Lorem ipsum dolor sit amet</h2>
>>>>>>> 9c45221ba62a96829b1d93017f889dddd4c2817a
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
<<<<<<< HEAD
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
=======
              <img width="100%" src="https://picsum.photos/800/600?random=6" />
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </Carousel.Item>
          {/* ... */}
>>>>>>> 9c45221ba62a96829b1d93017f889dddd4c2817a
        </Carousel>
      </div>
    </div>
  );
}

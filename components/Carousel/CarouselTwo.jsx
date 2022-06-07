import Carousel from "better-react-carousel";
import styles from "./styles.module.scss";

export default function CarouselTwo() {
  return (
    <div className={styles.CarouselTwo}>
      <h2>Best Seller</h2>
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" src="https://picsum.photos/800/600?random=2" />
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" src="https://picsum.photos/800/600?random=3" />
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" src="https://picsum.photos/800/600?random=4" />
              <h2>Lorem ispsum dolor sit amet</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" src="https://picsum.photos/800/600?random=5" />
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" src="https://picsum.photos/800/600?random=6" />
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </Carousel.Item>
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
}

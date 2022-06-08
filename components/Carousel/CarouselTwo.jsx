import Carousel from "better-react-carousel";
import styles from "./styles.module.scss";
import { useVacationContext } from "../../Context/Provider";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function CarouselTwo() {
  const {
    state: { vacation, italia, russia, francia, usa },
  } = useVacationContext();
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    let imgArr = [];

    russia?.forEach(
      (element) => (imgArr = [...imgArr, element.cover_image_url])
    );
    italia?.forEach(
      (element) => (imgArr = [...imgArr, element.cover_image_url])
    );
    francia.forEach(
      (element) => (imgArr = [...imgArr, element.cover_image_url])
    );
    usa.forEach((element) => (imgArr = [...imgArr, element.cover_image_url]));

    setImgs(imgArr);
    console.log("--->", russia[0]?.name);
  }, [italia, russia, francia, usa]);

  return (
    <div className={styles.CarouselTwo}>
      <div className={styles.title}>
        <h2>Best Seller</h2>
        <p>Le migliori mete del momento</p>
      </div>

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
              <img width="100%" height="400px" src={imgs[1]} />
              <>
                <div className={styles.descriptContainer}>
                  <Link href={`/country/city/${russia[1]?.name}`}>
                    <a>
                      <h2>{russia[1]?.name}</h2>
                    </a>
                  </Link>
                  <div className={styles.starContainer}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" height="400px" src={imgs[3]} />
              <div className={styles.descriptContainer}>
                <Link href={`/country/city/${italia[0]?.name}`}>
                  <a>
                    <h2>{italia[0]?.name}</h2>
                  </a>
                </Link>
                <div className={styles.starContainer}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" height="400px" src={imgs[4]} />

              <div className={styles.descriptContainer}>
                <Link href={`/country/city/${italia[1]?.name}`}>
                  <a>
                    <h2>{italia[1]?.name}</h2>
                  </a>
                </Link>
                <div className={styles.starContainer}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" height="400px" src={imgs[5]} />
              <div className={styles.descriptContainer}>
                <Link href={`/country/city/${italia[2]?.name}`}>
                  <a>
                    <h2>{italia[2]?.name}</h2>
                  </a>
                </Link>

                <div className={styles.starContainer}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" height="400px" src={imgs[8]} />

              <div className={styles.descriptContainer}>
                <Link href={`/country/city/${italia[3]?.name}`}>
                  <a>
                    <h2>{italia[3]?.name}</h2>
                  </a>
                </Link>
                <div className={styles.starContainer}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.card}>
              <img width="100%" height="400px" src={imgs[54]} />

              <div className={styles.descriptContainer}>
                <Link href={`/country/city/${usa[40]?.name}`}>
                  <a>
                    <h2>{usa[40]?.name}</h2>
                  </a>
                </Link>
                <div className={styles.starContainer}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
}

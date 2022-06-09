import { useState, useEffect } from "react";
import carousel from "./carousel.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const items = [
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "https://media.istockphoto.com/photos/prize-wheel-picture-id175482570?b=1&k=20&m=175482570&s=170667a&w=0&h=cHDwnCHXxRE5jMtwX-k1Xq4KSrOTJyGIvt91hrOkZqA=",
  "https://media.istockphoto.com/photos/premises-liability-book-with-a-court-hummer-picture-id1324909380?b=1&k=20&m=1324909380&s=170667a&w=0&h=JBaFpAH3t2-MU4DEzHiJRS5WxVAWAydeVu3-iWJkGVk=",
];

export const Carousel = (props) => {
  const title = props.name || "Sicily";

  const [img1, setImg1] = useState(0);
  const [img2, setImg2] = useState(1);
  const [img3, setImg3] = useState(2);
  const [img4, setImg4] = useState(3);
  const [img5, setImg5] = useState(4);
  const [img6, setImg6] = useState(5);

  const [sentinel, setSentinel] = useState(false);
  const [sentinell, setSentinell] = useState(false);

  const increases = () => {
    setSentinel(true);
    if (img1 === items.length - 1) {
      setImg1(0);
    } else {
      setImg1((prev) => (prev += 1));
    }
    if (img2 === items.length - 1) {
      setImg2(0);
    } else {
      setImg2((prev) => (prev += 1));
    }

    if (img3 === items.length - 1) {
      setImg3(0);
    } else {
      setImg3((prev) => (prev += 1));
    }

    if (img4 === items.length - 1) {
      setImg4(0);
    } else {
      setImg4((prev) => (prev += 1));
    }

    if (img5 === items.length - 1) {
      setImg5(0);
    } else {
      setImg5((prev) => (prev += 1));
    }

    if (img6 === items.length - 1) {
      setImg6(0);
    } else {
      setImg6((prev) => (prev += 1));
    }

    setTimeout(() => {
      setSentinel(false);
    }, 1000);
  };

  const decrease = () => {
    setSentinell(true);

    if (img1 === 0) {
      setImg1(items.length - 1);
    } else {
      setImg1((prev) => (prev -= 1));
    }

    if (img2 === 0) {
      setImg2(items.length - 1);
    } else {
      setImg2((prev) => (prev -= 1));
    }

    if (img3 === 0) {
      setImg3(items.length - 1);
    } else {
      setImg3((prev) => (prev -= 1));
    }

    if (img4 === 0) {
      setImg4(items.length - 1);
    } else {
      setImg4((prev) => (prev -= 1));
    }

    if (img5 === 0) {
      setImg5(items.length - 1);
    } else {
      setImg5((prev) => (prev -= 1));
    }

    if (img6 === 0) {
      setImg6(items.length - 1);
    } else {
      setImg6((prev) => (prev -= 1));
    }
    setTimeout(() => {
      setSentinell(false);
    }, 1000);
  };

  return (
    <div className={carousel.carouselContainer}>
      <div className={carousel.btnContainer}>
        <button onClick={decrease}>
          {" "}
          <FaAngleLeft size="30px" />{" "}
        </button>
      </div>

      <div className={carousel.cardsWrapper}>
        <div
          className={`${carousel.cards} ${
            sentinel == true
              ? carousel.transitionIn
              : "" || sentinell == true
              ? carousel.transitionOut
              : ""
          }`}
        >
          <img
            // className={`${sentinel == true ? carousel.transitionIn : ""}`}
            src={items[img1]}
            alt="1"
          />
          <h2
            className={`${
              sentinel == true
                ? carousel.transitionIn
                : "" || sentinell == true
                ? carousel.transitionOut
                : ""
            }`}
          >
            {title}
          </h2>
        </div>
        <div
          className={`${carousel.cards} ${
            sentinel == true
              ? carousel.transitionIn
              : "" || sentinell == true
              ? carousel.transitionOut
              : ""
          }`}
        >
          <img
            // className={`${sentinel == true ? carousel.transitionIn : ""}`}
            src={items[img2]}
            alt="2"
          />
          <h2>{title}</h2>
        </div>
        <div
          className={`${carousel.cards} ${
            sentinel == true
              ? carousel.transitionIn
              : "" || sentinell == true
              ? carousel.transitionOut
              : ""
          }`}
        >
          <img src={items[img3]} alt="3" />
          <h2>{title}</h2>
        </div>
        <div
          className={`${carousel.cards} ${
            sentinel == true
              ? carousel.transitionIn
              : "" || sentinell == true
              ? carousel.transitionOut
              : ""
          }`}
        >
          <img src={items[img4]} alt="4" />
          <h2>{title}</h2>
        </div>
        <div
          className={`${carousel.cards} ${
            sentinel == true
              ? carousel.transitionIn
              : "" || sentinell == true
              ? carousel.transitionOut
              : ""
          }`}
        >
          <img src={items[img5]} alt="5" />
          <h2>{title}</h2>
        </div>
        <div
          className={`${carousel.cards} ${
            sentinel == true
              ? carousel.transitionIn
              : "" || sentinell == true
              ? carousel.transitionOut
              : ""
          }`}
        >
          <img
            className={`${
              sentinel == true
                ? carousel.transition
                : "" || sentinell == true
                ? carousel.transitionOut
                : ""
            }`}
            src={items[img6]}
            alt="6"
          />
          <h2>{title}</h2>
        </div>
      </div>

      <div className={carousel.btnContainer}>
        <button onClick={increases}>
          {" "}
          <FaAngleRight size="30px" />
        </button>
      </div>
    </div>
  );
};

import { ReactComponent as SliderArrowSVG } from "../../assets/svgs/SliderArrow.svg";
import { ReactComponent as SliderArrowLeftSVG } from "../../assets/svgs/SliderArrowLeft.svg";
import { SliderData } from "../../data";
import { useState, useEffect } from "react";
import "./Slider.scss";

type SliderButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

const SliderButton = ({ direction, onClick }: SliderButtonProps) => {
  const Arrow = direction === "left" ? SliderArrowLeftSVG : SliderArrowSVG;
  return (
    <button className={`slider__button ${direction}`} onClick={onClick}>
      <Arrow />
    </button>
  );
};

export const Slider = () => {
  const [index, setIndex] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(33.33);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchMove, setTouchMove] = useState<number | null>(null);
  const [visibleSlides, setVisibleSlides] = useState<number>(3); // default for desktop

  const getVisibleSlidesCount = () => (window.innerWidth <= 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      const count = getVisibleSlidesCount();
      setVisibleSlides(count);
      setSlideWidth(100 / count);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (direction: "next" | "prev") => {
    const maxIndex = SliderData.length - visibleSlides;

    setIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex >= maxIndex ? maxIndex : prevIndex + 1;
      }
      return prevIndex <= 0 ? 0 : prevIndex - 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchMove === null) return;

    const difference = touchStart - touchMove;
    const swipeThreshold = 50;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        handleSlideChange("next");
      } else {
        handleSlideChange("prev");
      }
    }

    setTouchStart(null);
    setTouchMove(null);
  };

  return (
    <div className="slider">
      <div className="slider__wrapper">
        {index > 0 && (
          <SliderButton
            direction="left"
            onClick={() => handleSlideChange("prev")}
          />
        )}
        <div
          className="slider__content"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="slider__track"
            style={{ transform: `translateX(-${index * slideWidth}%)` }}
          >
            {SliderData.map((imageSrc, i) => (
              <div key={i} className="slider__content__slide">
                <img src={imageSrc} alt={`Slide ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
        {index < SliderData.length - visibleSlides && (
          <SliderButton
            direction="right"
            onClick={() => handleSlideChange("next")}
          />
        )}
      </div>
    </div>
  );
};

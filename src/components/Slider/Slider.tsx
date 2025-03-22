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

  useEffect(() => {
    const handleResize = () => {
      setSlideWidth(window.innerWidth <= 768 ? 100 : 33.33);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (direction: "next" | "prev") => {
    setIndex((prevIndex) => {
      if (direction === "next")
        return prevIndex >= SliderData.length - 1 ? 0 : prevIndex + 1;
      return prevIndex <= 0 ? SliderData.length - 1 : prevIndex - 1;
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
      {index < SliderData.length - 1 && (
        <SliderButton
          direction="right"
          onClick={() => handleSlideChange("next")}
        />
      )}
      {/* <div className="slider__button-container">
        <ActionButton
          variant="transparent"
          translationKey="More Works"
          onClick={() => console.log("text")}
        />
      </div> */}
    </div>
  );
};

import Lottie from "react-lottie";
import animationData from "../../assets/animations/coding.json";
import "./CodingAnimation.scss";

const CodingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <div className="animation-container">
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </div>
  );
};

export default CodingAnimation;

import Lottie from "react-lottie";
import animationData from "../../assets/animations/teamwork.json";
import "./TeamworkAnimation.scss";

const TeamworkAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <div className="teamwork-animation">
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </div>
  );
};

export default TeamworkAnimation;
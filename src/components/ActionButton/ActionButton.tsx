import { ReactComponent as ArrowSVG } from "../../assets/svgs/Arrow.svg";
import "./ActionButton.scss";

type TransaltionKey =
  | "Reach Out"
  | "Get Started"
  | "More Works"
  | "Order Now"
  | "Submit"
  | "View Plans";
type StyleVariant = "primary" | "secondary" | "pricing" | "form";

interface ActionButtonProps {
  onClick: () => void;
  translationKey: TransaltionKey;
  variant: StyleVariant;
  hideIcon?: boolean;
}

export const ActionButton = ({
  onClick,
  translationKey,
  variant,
  hideIcon = false,
}: ActionButtonProps) => {
  return (
    <div className={`action-button --${variant}`} onClick={onClick}>
      {translationKey}
      {!hideIcon && <ArrowSVG className={`action-button__svg --${variant}`} />}
    </div>
  );
};

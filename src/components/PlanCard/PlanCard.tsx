import { ReactComponent as Check } from "../../assets/svgs/check.svg";
import { ActionButton } from "../ActionButton";
import { Plan } from "../../data";
import "./PlanCard.scss";

interface PlanCardProps {
  plan: Plan;
  onOpenForm: () => void;
}

const FeatureItem = ({ text }: { text: string }) => (
  <div className="plan-card__feature-item">
    <Check />
    <li>{text}</li>
  </div>
);

export const PlanCard = ({ plan, onOpenForm }: PlanCardProps) => {
  const { name, price, description, logo: Logo, features } = plan;

  return (
    <div className="plan-card">
      <div className="plan-card__logo">
        <Logo className="logo" />
      </div>

      <div className="plan-card__name">{name}</div>
      <div className="plan-card__price">{price}</div>
      <div className="plan-card__description">{description}</div>

      <hr className="plan-card__divider" />

      <div className="plan-card__services">
        <ul>
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </ul>
      </div>

      <div className="plan-card__button">
        <ActionButton
          hideIcon
          variant="pricing"
          translationKey="Order Now"
          onClick={onOpenForm}
        />
      </div>
    </div>
  );
};

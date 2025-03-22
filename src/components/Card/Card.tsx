import "./Card.scss";

interface CardProps {
  card_title: string;
  card_description: string;
  card_icon: React.ReactNode;
}

export const Card = ({
  card_title,
  card_description,
  card_icon,
}: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-container__icon-container">{card_icon}</div>
      <div className="card-container__title">{card_title}</div>
      <div className="card-container__description">{card_description}</div>
    </div>
  );
};
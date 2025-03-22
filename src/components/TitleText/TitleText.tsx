import "./TitleText.scss";

interface TitleTextProps {
  title_text: string;
}

export const TitleText = ({ title_text }: TitleTextProps) => {
  return (
    <div className="title-text"> {title_text} </div>
  );
};

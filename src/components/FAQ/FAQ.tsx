import { ReactComponent as CrossSVG } from "../../assets/svgs/Union.svg";
import { useState } from "react";
import "./FAQ.scss";

interface FAQProps {
  question: string;
  answer: string;
}

export const FAQ = ({ question, answer }: FAQProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className="faq-container">
      <div className="faq-container__header">
        <div className="faq-container__question">{question}</div>
        <div className={`faq-container__svg ${open ? "open" : ""}`}>
          <CrossSVG />
        </div>
      </div>
      <div className={`faq-container__answer-wrapper ${open ? "open" : ""}`}>
        <div className="faq-container__answer">{answer}</div>
      </div>
    </div>
  );
};
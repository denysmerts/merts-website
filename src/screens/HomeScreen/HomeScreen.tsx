import {
  ActionButton,
  TitleText,
  Card,
  NavBar,
  FAQ,
  Footer,
  Slider,
  PlanCard,
  ContactForm,
} from "../../components";
import { CodingAnimation, TeamworkAnimation } from "../../animations";
import { CardsData, FAQData, PlansData } from "../../data";
import { useState } from "react";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import "./HomeScreen.scss";

export const HomeScreen = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="home-screen" id="home">
      <div className="home-screen__hero-section">
        <NavBar onOpenForm={() => setIsFormOpen(true)} />
        <div className="home-screen__hero-section__title-text">
          Developing outstanding websites for{" "}
          <span className="home-screen__hero-section__title-text__grey-text">
            business.
          </span>
        </div>
        <div className="home-screen__hero-section__button">
          <ActionButton
            variant="primary"
            translationKey="View Plans"
            onClick={() => scrollToSection("plans")}
          />
        </div>
        <div className="home-screen__hero-section__sub-text">
          Creating tailored web solutions to elevate <br /> your business in the
          digital world.
        </div>
      </div>

      <div className="home-screen__about-section">
        <div className="y">
          <div className="first-section">
            <div className="first-section__animation">
              <TeamworkAnimation />
            </div>
            <div className="first-section__text">
              <div className="first-section__text__title">
                Order your pass to Success.
              </div>
              <div className="first-section__text__sub-title">
                We handle everything from idea generation to design,
                development, and launch, creating a website that reflects your
                vision and delivers results.
              </div>
            </div>
          </div>
          <div className="first-section">
            <div className="first-section__text">
              <div className="first-section__text__title">
                And We Construct Your Triumph
              </div>
              <div className="first-section__text__sub-title">
                Our team collaborates with you every step of the way, ensuring
                your website is not only visually stunning but also fast,
                functional, and optimized for your goals
              </div>
            </div>
            <div className="first-section__animation">
              <CodingAnimation />
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="cards-sections">
        <TitleText title_text="What We Offer" />
        <div className="cards-container">
          {CardsData.map((card, index) => (
            <Card
              key={index}
              card_title={card.title}
              card_description={card.description}
              card_icon={<card.icon />}
            />
          ))}
        </div>
      </div>

      <div id="works" className="works-section">
        <TitleText title_text="What We’ve Built" />
        <Slider />
      </div>
      <div className="plan-section" id="plans">
        <TitleText title_text="Plans & Pricing" />
      </div>
      <div className="plans-container">
        {PlansData.map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            onOpenForm={() => setIsFormOpen(true)}
          />
        ))}
      </div>

      <TitleText title_text="FAQ" />
      <div className="FAQ-section">
        {FAQData.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="banner-section">
        <div className="banner-section__title">
          Your vision.
          <span className="banner-section__title__span">Our Craft.</span>
        </div>
        <div className="banner-section__button">
          <ActionButton
            variant="primary"
            translationKey="Get Started"
            onClick={() => setIsFormOpen(true)}
            hideIcon
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

import { ReactComponent as LogoSVG } from "../../assets/svgs/Logo.svg";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import "./Footer.scss";

export const Footer = () => {
  const { scrollToSection } = useScrollToSection();

  const socialLinks = [
    { name: "Fiverr", url: "https://www.fiverr.com/denys_merts" },
    { name: "Dribbble", url: "https://dribbble.com/denysmerts" },
    { name: "Behance", url: "https://www.behance.net/denysmerts" },
  ];

  return (
    <div className="footer-container">
      <div className="footer-container__wrapper">
        <div className="footer-container__text">
          <div className="footer-container__text__logo">
            <LogoSVG />
          </div>
          <div className="footer-container__text__subtext">
            We bring your vision in websites
          </div>
        </div>
        <div className="footer-container__links">
          <div className="footer-container__links__pages">
            <div className="footer-container__links__pages__name">
              Let’s Create.
            </div>
            <ul className="footer-container__links__pages__link">
              <li onClick={() => scrollToSection("services")}>Services</li>
              <li onClick={() => scrollToSection("works")}>Portfolio</li>
              <li onClick={() => scrollToSection("plans")}>Plans</li>
            </ul>
          </div>
          <div className="footer-container__links__socials">
            <div className="footer-container__links__socials__name">
              Find Us.
            </div>
            <ul className="footer-container__links__socials__link">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

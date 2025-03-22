import { ReactComponent as LogoSVG } from "../../assets/svgs/Logo.svg";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { ActionButton } from "../ActionButton";
import { motion } from "framer-motion";
import { useState } from "react";
import "./NavBar.scss";

interface NavBarProps {
  onOpenForm: () => void;
}

interface NavItem {
  text: string;
  section: string;
}

const NavItems: NavItem[] = [
  { text: "Services", section: "services" },
  { text: "Portfolio", section: "works" },
  { text: "Plans", section: "plans" },
];

const linkVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (i: number) => ({
    width: "auto",
    opacity: 1,
    transition: {
      width: { duration: 0.4, ease: "easeInOut" },
      opacity: { duration: 0.2, delay: i * 0.1 },
    },
  }),
};

const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    className={`hamburger ${isOpen ? "active" : ""}`}
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
);

const NavLinks = ({
  items,
  onItemClick,
}: {
  items: NavItem[];
  onItemClick: (section: string) => void;
}) => (
  <div className="navbar__container__links">
    <ul>
      {items.map((item, index) => (
        <motion.li
          key={item.text}
          custom={index}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          onClick={() => onItemClick(item.section)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.text}
        </motion.li>
      ))}
    </ul>
  </div>
);

const NavButton = ({ onClick }: { onClick: () => void }) => (
  <div className="navbar__container__button">
    <ActionButton
      variant="secondary"
      onClick={onClick}
      translationKey="Reach Out"
    />
  </div>
);

export const NavBar = ({ onOpenForm }: NavBarProps) => {
  const { scrollToSection } = useScrollToSection();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`navbar ${isOpen ? "menu-open" : ""}`}>
        <LogoSVG
          className="navbar__logo"
          onClick={() => {
            scrollToSection("home");
            setIsOpen(false);
          }}
        />
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

        <div className={`navbar__container ${isOpen ? "active" : ""}`}>
          <NavLinks items={NavItems} onItemClick={handleNavigation} />
          <NavButton onClick={onOpenForm} />
        </div>
      </div>
    </div>
  );
};

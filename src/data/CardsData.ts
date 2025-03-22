import { ReactComponent as CodeSVG } from "../assets/svgs/code.svg";
import { ReactComponent as PalleteSVG } from "../assets/svgs/palette.svg";
import { ReactComponent as CogSVG } from "../assets/svgs/cog.svg";
import { ReactComponent as MobileSVG } from "../assets/svgs/mobile-phone.svg";
import { ReactComponent as CloudSVG } from "../assets/svgs/cloud-arrow-up.svg";
import { ReactComponent as WalletSVG } from "../assets/svgs/wallet.svg";

export interface CardData {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const CardsData: CardData[] = [
  {
    title: "Custom Development",
    description: "Tailored solutions for your unique business needs.",
    icon: CodeSVG,
  },
  {
    title: "UI/UX Design",
    description: "Creating seamless and engaging user experiences.",
    icon: PalleteSVG,
  },
  {
    title: "Maintenance & Support",
    description: "Regular updates, bug fixes, and 24/7 support.",
    icon: CogSVG,
  },
  {
    title: "Mobile-Friendly ",
    description: "Fully responsive designs that look great on any device.",
    icon: MobileSVG,
  },
  {
    title: "Hosting & Deployment",
    description: "End-to-end hosting and seamless deployment solutions.",
    icon: CloudSVG,
  },
  {
    title: "Affordable Prices",
    description: "Affordable prices below the average market rate.",
    icon: WalletSVG,
  },
];

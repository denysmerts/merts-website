export interface Plan {
    name: string;
    price: string;
    description: string;
    logo: React.FC<React.SVGProps<SVGSVGElement>>;
    features: string[];
  }
  
  import { ReactComponent as Landing } from "../assets/svgs/landing.svg";
  import { ReactComponent as Business } from "../assets/svgs/business.svg";
  import { ReactComponent as Ecommerce } from "../assets/svgs/e-commerce.svg";
  
  export const PlansData: Plan[] = [
    {
      name: "Landing Page",
      price: "$100.00",
      description: "A sleek, one-page website to make a strong first impression.",
      logo: Landing,
      features: [
        "One-page Website",
        "Responsive Design",
        "Basic Animations",
        "No Free Revisions",
        "No Optimization Settings",
      ],
    },
    {
        name: "Business Website",
        price: "$150.00",
        description: "A multi-page site to showcase your brand, services, and contact details.",
        logo: Business,
        features: [
          "Up to 3 Pages",
          "Responsive Design",
          "Smooth animations",
          "1 Free Revision",
          "Fast Loading Speed",
        ],
      },
      {
        name: "E-Commerce Store",
        price: "$250.00",
        description: "A full-featured online shop to sell products with ease.",
        logo: Ecommerce,
        features: [
          "Up to 5 pages",
          "Responsive Design",
          "Custom product pages",
          "3 Free Revision",
          "Payment Integration",
        ],
      },
    
  ];
  
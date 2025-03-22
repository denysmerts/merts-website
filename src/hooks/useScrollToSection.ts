import { useCallback } from "react";

export const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return { scrollToSection };
};

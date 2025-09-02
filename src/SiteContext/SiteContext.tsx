"use client";

import { createContext, useContext } from "react";

type SiteContextType = {
  openBargerMenu: boolean;
  bargerMenuToggle: (e: boolean) => void;

  openContactForm: boolean;
  toggleContactForm: (e: boolean) => void;
};

const SiteContext = createContext<SiteContextType>({
  openBargerMenu: false,
  bargerMenuToggle: () => {},
  openContactForm: false,
  toggleContactForm: () => {},
});

export const UseSiteContext = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

export default SiteContext;

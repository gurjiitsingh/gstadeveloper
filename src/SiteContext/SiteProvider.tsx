"use client";

import SiteContext from "./SiteContext";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const SiteProvider: React.FC<Props> = ({ children }) => {
  const [openBargerMenu, setOpenBargerMenu] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);

  function bargerMenuToggle(e: boolean) {
    setOpenBargerMenu(e);
  }

  function toggleContactForm(e: boolean) {
    setOpenContactForm(e);
  }

  return (
    <SiteContext.Provider
      value={{
        openBargerMenu,
        bargerMenuToggle,
        openContactForm,
        toggleContactForm,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

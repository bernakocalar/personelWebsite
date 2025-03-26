import React, { createContext, useState, useContext } from "react";
import translations from "../translation";

// Dil context'ini oluştur
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Varsayılan dil

  // Dili değiştir
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Özel hook: useLanguage
export const useLanguage = () => useContext(LanguageContext);

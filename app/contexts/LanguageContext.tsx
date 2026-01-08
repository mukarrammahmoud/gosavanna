import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as arMessages } from "../locales/ar/messages";
import { messages as enMessages } from "../locales/en/messages";


type Locale = "ar" | "en";

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Initialize i18n
i18n.load({
  ar: arMessages,
  en: enMessages,
});
i18n.activate("ar");

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("gosavanna-locale");
      return (stored as Locale) || "ar";
    }
    return "ar";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gosavanna-locale", locale);
      i18n.activate(locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale]);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      <I18nProvider i18n={i18n}>
        {children}
      </I18nProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

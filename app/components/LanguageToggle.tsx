import { useLanguage } from "../contexts/LanguageContext";

export function LanguageToggle() {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-3 rounded-full bg-secondary border border-accent hover:bg-accent transition-all duration-300 hover:scale-110 shadow-lg font-bold text-accent hover:text-primary"
      aria-label="Toggle language"
    >
      {locale === "ar" ? "EN" : "AR"}
    </button>
  );
}

import { Trans } from "@lingui/react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-secondary border-t border-accent/20">
      <div className="container mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <img 
            src="/logo.svg?v=3" 
            alt="GoSavanna Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>
        <p className="text-secondary">
          <Trans id="footer.copyright" />
        </p>
      </div>
    </footer>
  );
}

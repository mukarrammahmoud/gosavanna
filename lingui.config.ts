import { defineConfig } from "@lingui/cli";

export default defineConfig({
  locales: ["ar", "en"],
  sourceLocale: "ar",
  catalogs: [
    {
      path: "<rootDir>/app/locales/{locale}/messages",
      include: ["app"],
    },
  ],
  format: "po",
});

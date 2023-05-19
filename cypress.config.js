import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});

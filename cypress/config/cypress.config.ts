import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    keystrokeDelay: 20,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalRunAllSpecs: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    numTestsKeptInMemory: 5,
    requestTimeout: 10000,
    execTimeout: 10000,
    taskTimeout: 10000,
    pageLoadTimeout: 15000,
    defaultCommandTimeout: 15000,
    responseTimeout: 15000,
    watchForFileChanges: false,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});

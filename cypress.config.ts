import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ew8ys4',
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  viewportWidth: 1700,
  viewportHeight: 900,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // Mochawesome html report 
    reporter: 'mochawesome',
    reporterOptions: {
      "reportDir": "test-results/mochawesome",
      "overwrite": true,
      "html": true,
      "json": false,
      "charts": true,
      "reportTitle": "Cypress Automation Result",
      "reportPageTitle": "Cypress Automation Result",
      "code": true,
      "timestamp": false
    },

    // video reporting
    video: true,
    videoUploadOnPasses: false,
    videosFolder: 'test-results/video',

    // screenshots reporting
    screenshotOnRunFailure: true,
    screenshotsFolder: 'test-results/screenshots',

    // Path of spec files to run
    specPattern: [
      'cypress/e2e/smoke-tests/login.cy.ts',
      'cypress/e2e/*.cy.ts',
      'cypress/e2e/demo-tests/tests.cy.ts',
      'cypress/e2e/smoke-tests/loginFunctionality.cy.ts',
    ],

    // base url of the application
    baseUrl: 'https://q-ims.com/uat/ins_mg_ui',  

  },
  

});

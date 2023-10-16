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
      "timestamp": true
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
      // 'cypress/e2e/demo-tests/*.cy.ts',
      'cypress/e2e/*.cy.ts',
      'cypress/e2e/demo-tests/tests.cy.ts',
      // 'cypress/e2e/smoke-tests/masterIR.cy.ts',
      'cypress/e2e/smoke-tests/loginFunctionality.cy.ts',
    ],

    // base url of the application
    baseUrl: 'https://inspectionsmanagementsystem.com/uat',
  


    // By default testIsolation value is true
    // To manage the same state between one `it` block to another
    // inside one describe block
    // testIsolation: false,
  },
  

});

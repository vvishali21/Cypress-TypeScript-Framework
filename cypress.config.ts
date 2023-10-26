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
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    // Mochawesome html report 
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      "reportDir": "reports/mochawesome",
      "charts": true,
      "embeddedScreenshots": true,
      "inlineAssets": true,
      "overwrite": true,
      "html": true,
      "json": false,
      "reportTitle": "HAL ERP",
      "reportPageTitle": "Cypress Automation Result",
      "code": true,
      "timestamp": false
    },


    // video reporting
    video: true,
    videoUploadOnPasses: false,
    videosFolder: 'reports/video',


    // screenshots reporting
    screenshotOnRunFailure: true,
    screenshotsFolder: 'reports/screenshots',

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
    baseUrl: 'https://q-ims.com/uat',
  


    // By default testIsolation value is true
    // To manage the same state between one `it` block to another
    // inside one describe block
    // testIsolation: false,
  },
  

});

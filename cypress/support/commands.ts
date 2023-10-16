/// <reference types="cypress" />
import loginPage from "../page-objects/login-page";
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', (email, password) => { 
    cy.get("input[placeholder='Enter User Name']").type(email);
    cy.get("input[placeholder='Enter password']").type(password);
    cy.get("button[type='submit']").click();
 })

//  Cypress.Commands.overwrite('type', (originalFn, element, text, options) => { 
//     const clearedText = `{selectAll}{backspace}${text}`;
//     options = {...options, log : false};
//     return originalFn (element, clearedText, options)
//  })




Cypress.Commands.add('login' as any, (userName: string, password: string) => { 
    
    loginPage.userNameInput
        .should('be.visible')
        .type(userName)

    loginPage.passwordInput
        .should('be.visible')
        .type(password)

    loginPage.loginButton
        .click()

})





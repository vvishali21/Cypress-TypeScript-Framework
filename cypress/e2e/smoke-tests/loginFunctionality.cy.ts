import loginPage from "../../page-objects/login-page"
import securePage from "../../page-objects/secure-page";

describe(`Login`, () => {

    let cred;

    before(() => {
        cy.fixture('credentials').then(function (data) {
            cred = data;
        })
    })

    beforeEach(() => {
        loginPage.visit();
    })

    it('Login with valid login credentials', () => {
        loginPage.loginButton
            .should('be.visible')
            .and('be.enabled')
            .click()

        loginPage.userNameInput
            .should('be.visible')
            .and('be.enabled')
            .type(cred.userName)

        loginPage.passwordInput
            .should('be.visible')
            .and('be.enabled')
            .type(cred.password)

        loginPage.loginButton
            .click()

        cy.url()
            .should('contain', '/ins_mg_ui/view/list-of-inspection')

        securePage.successMessage
            .should('be.visible')
            .and('contain', 'Login Successfully')
    })

    it.skip(`Login with invalid user`, () => {
        loginPage.userNameInput
            .type(cred.invalidUser)

        loginPage.passwordInput
            .type(cred.password)

        loginPage.loginButton
            .click()

        loginPage.errorMessage
            .should('be.visible')
            .contains('Invalid Email or password')
    })

    it(`Login with invalid password`, () => {
        loginPage.userNameInput
            .type(cred.userName)

        loginPage.passwordInput
            .type(cred.invalidPassword)

        loginPage.loginButton
            .click()

        loginPage.errorMessage
            .should('be.visible')
            .contains('Invalid Email or password')
    })

})

class LoginPage {

    get userNameInput() { return cy.get("input[placeholder='Enter User Name']") }

    get passwordInput() { return cy.get("input[placeholder='Enter password']") }

    get loginButton() { return cy.get("button[type='submit']") }

    get errorMessage() { return cy.get('#notistack-snackbar') }

    visit() {
        return cy.visit('/ins_mg_ui')
    }
}

export default new LoginPage();

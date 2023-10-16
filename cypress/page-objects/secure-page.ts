
class SecurePage {

    get successMessage() { return cy.get('#notistack-snackbar') }

    verifySuccessMessage() {
        this.successMessage.should('be.visible')
        .and('contain', 'Login Successfully')
    }

}

export default new SecurePage();

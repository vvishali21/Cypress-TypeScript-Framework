class EditPage {

    get edit() { return cy.get(':nth-child(1) > :nth-child(11) > .d-flex > :nth-child(2) > svg') }

    get statusOfInspection() { return cy.get(':nth-child(1) > .bg-light > :nth-child(1) > :nth-child(3) > :nth-child(1) > .cards > .card-form > .card-body > :nth-child(3) > .mt-5 > :nth-child(5) > :nth-child(1) > div > .form-select') }

    get view() {return cy.get(':nth-child(1) > :nth-child(11) > .d-flex > :nth-child(1) > svg') }
    
    clickEditIcon(){
        cy.wait(2000) 
        this.edit.click();
    }

    clickViewIcon(){
        cy.wait(2000) 
        this.view.click();
    }

}

export default new EditPage();

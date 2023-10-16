class CreatePage {

    get keoImage() { return cy.get(':nth-child(2) > :nth-child(1) > img') }

    get hbkImage() { return cy.get(':nth-child(2) > img') }

    get dropdownInput() { return cy.get(".dropbtn") }

    get createnewInput() { return cy.xpath("//a[normalize-space()='Inspection for foul sewer network']") }

    get documentReference() { return cy.get(":nth-child(1) > :nth-child(2) > .mb-1 > #formFile") }

    get boq() { return cy.get("tbody > :nth-child(1) > :nth-child(4) > div > .form-control") }

    get boq1() { return cy.get("tbody > :nth-child(2) > :nth-child(4) > div > .form-control") }

    get boq2() { return cy.get(":nth-child(3) > :nth-child(4) > div > .form-control") }

    get boq3() { return cy.get(":nth-child(4) > :nth-child(4) > div > .form-control") }

    get boq4() { return cy.get(":nth-child(5) > :nth-child(4) > div > .form-control") }

    get status() { return cy.get(':nth-child(2) > [style="width: 20%;"] > div > .form-select') }

    get status1() { return cy.get(':nth-child(3) > [style="width: 20%;"] > div > .form-select') }

    get status2() { return cy.get(':nth-child(4) > [style="width: 20%;"] > div > .form-select') }

    get status3() { return cy.get(':nth-child(5) > [style="width: 20%;"] > div > .form-select') }

    get status4() { return cy.get(':nth-child(6) > [style="width: 20%;"] > div > .form-select') }

    get status5() { return cy.get(':nth-child(7) > [style="width: 20%;"] > div > .form-select') }

    dateToSelect = '2023-04-18';

    get datepickerInputSelector() { return cy.get(':nth-child(1) > .bg-light > :nth-child(1) > :nth-child(3) > :nth-child(1) > .cards > .card-form > .card-body > :nth-child(3) > .mt-5 > .justify-content-evenly > :nth-child(2) > div > .form-control') }

    get surveyor() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div[1]/div/input') }

    get sepe() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div[2]/div/input') }

    get qc() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div[3]/div/input') }

    get others() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div[4]/div/input') }

    get remarks() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div[5]/textarea') }
    
    get surveyor1() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[2]/div[1]/div/input') }
    
    get inspector() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[2]/div[2]/div/input') }

    get se() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[2]/div[3]/div[1]/div/div/input') }

    get re() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[2]/div[3]/div[2]/div/div/input') }

    get material() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[2]/div[4]/div/input') }

    get others1() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[2]/div[5]/div/input') }

    get remarks1() { return cy.xpath('/html/body/div/div/div/div/main/div[3]/div/div/div[3]/div/form/div[1]/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/div[2]/div[2]/div[6]/textarea') }

    get submit() { return cy.get('.align-items-end > .btn') }


    visit() {
        return cy.visit('/ins_mg_ui')
    }

    url() {
        return cy.url().should('contain', '/ins_mg_ui/view/list-of-inspection')
    }

    verifyImage() {
        this.keoImage.should('be.visible');
        this.hbkImage.should('be.visible');
    }

    clickCreateNewInspection() {
        this.dropdownInput.click({ force: true });
        this.createnewInput.click({ force: true });
    }

    boqReference() {
        this.boq.type('vishali')
        this.boq1.type('ABCD')
        this.boq2.type('21')
        this.boq3.type('MASTER IR')
        this.boq4.type('Testing')
    }
    documentStatus() {
        this.status.select('Approved')
        this.status1.select('Approved with Comments')
        this.status2.select('Rejected')
        this.status3.select('Cancelled')
        this.status4.select('Revise Resubmit')
        this.status5.select('Approved')
    }

    surveySettingOut() {
        this.datepickerInputSelector.type(this.dateToSelect, { force: true })
        this.surveyor.type('vish', { force: true })
        this.sepe.type('SEPE', { force: true })
        this.qc.type('QC', { force: true })
        this.others.type('Others', { force: true })
        this.remarks.type('Good', { force: true })
        this.surveyor1.type('KEO', { force: true })
        this.inspector.type('Inspector', { force: true })
        this.se.type('SE', { force: true })
        this.re.type('RE', { force: true })
        this.material.type('Material', { force: true })
        this.others1.type('NIL', { force: true })
        this.remarks1.type('Not bad', { force: true })

    }

    clickSubmit() {
        cy.wait(3000)
        this.submit.click({ force: true });
    }

}

export default new CreatePage();

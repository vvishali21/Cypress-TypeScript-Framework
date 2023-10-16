import loginPage from "../../page-objects/login-page"
import securePage from "../../page-objects/secure-page";
import createPage from "../../page-objects/create-page";
import editPage from "../../page-objects/edit-page";

describe(`Login`, () => {

    let cred;

    before(() => {
        cy.fixture('credentials').then(function (data) {
            cred = data;
        })
    })

    beforeEach(() => {
        loginPage.visit();

        loginPage.userNameInput
            .type(cred.userName)

        loginPage.passwordInput
            .type(cred.password)

        loginPage.loginButton
            .click()

        createPage.url()
        securePage.verifySuccessMessage()
    })

    it(`Create new inspection`, () => {


        createPage.clickCreateNewInspection()
        createPage.verifyImage()

        createPage.documentReference
            .type(cred.location)

        createPage.boqReference()
        createPage.documentStatus()
        createPage.surveySettingOut()
        createPage.clickSubmit()

        createPage.url()


    })

    it(`Edit Inspection`, () => {

        editPage.clickEditIcon()

        createPage.documentReference.clear()
            .type(cred.editLocation)

        createPage.boq.clear().type(cred.boq)
        createPage.boq1.clear().type(cred.boq1)
        createPage.boq3.clear().type(cred.boq3)
        createPage.boq4.clear().type(cred.boq4)

        createPage.status.select(cred.status)
        createPage.status5.select(cred.status5)

        editPage.statusOfInspection.select(cred.status4, {force: true})

        createPage.clickSubmit()

        createPage.url()
    })
     
    it.only(`View Inspection`, () => {
      
        editPage.clickViewIcon()

    })


})
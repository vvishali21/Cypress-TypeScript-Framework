declare namespace Cypress {
    interface Chainable {

        login(email : string, password : string): void
        login(userName: string, password: string): Chainable<any>
       
    }

}


  
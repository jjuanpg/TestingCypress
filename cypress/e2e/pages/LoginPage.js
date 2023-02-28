import BasePage from "./BasePage";

class LoginPage extends BasePage{
    imputEmail = 'form > div > input[type="text"]';
    imputPassword = 'input[type="password"]';

    constructor() {
        super();

    }

    login(){
        this.navigate(Cypress.env('url'))
        const username = Cypress.env('userName')
        const password = Cypress.env('password')
        cy.get(this.imputEmail).type(username);
        cy.get(this.imputPassword).type(password+'{enter}');
        cy.wait(5000)
    }
    logout(){
        cy.get('#account_pulldown').click();
        cy.get('[href="javascript:Logout();"]').click()
    }
}
export default LoginPage
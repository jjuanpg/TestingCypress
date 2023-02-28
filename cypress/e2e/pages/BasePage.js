class BasePage{

    navigate(url){
       Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit(url);
    }
    clickOnElement(element){
        cy.get(element).click();
    }

}
export default BasePage;
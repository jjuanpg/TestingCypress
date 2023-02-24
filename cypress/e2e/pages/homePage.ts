abstract class homePage{

    constructor(){
        cy.visit('a');
    };

    clickElement(selector) {
        cy.get(selector).click();
    }
  
    typeText(selector, text) {
        cy.get(selector).type(text);
    }
  
    assertText(selector, expectedText) {
        cy.get(selector).should("have.text", expectedText);
    }
  
    assertVisible(selector) {
        cy.get(selector).should("be.visible");
    }
}
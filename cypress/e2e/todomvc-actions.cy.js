/// <reference types='cypress' />

// it('Should navigate to the TodoMVC App', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh/');
// })

describe('TODO-MVC SUITE', () => {

    beforeEach('Should navigate to the HomePage', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/'); // ?delay-new-todo=5000    add a delay to the element todo
        cy.get('.new-todo', {timeout: 6000}).type("Cypress {enter}");
        cy.get('.new-todo', {timeout: 6000}).type("Automation {enter}");
    });

    it('Should be able to add a new todo to the list', () => {
        cy.get('.new-todo', {timeout: 6000}).type("WTFMAN {enter}");
        cy.get('label').first().should('have.text', 'WTFMAN');
    });

    it('Should mark a todo as completed', () => {
        cy.get('.toggle').each(($el) =>{ cy.wrap($el).click(); });
        cy.get('label').each(($el) => { cy.wrap($el).should('have.css', 'text-decoration-line', 'line-through'); });
    });

    it('Should have an empty todo list', () => {
        cy.get('.toggle').each(($el) =>{ cy.wrap($el).click(); });
        cy.contains('Clear completed').click();
        cy.get('.todo-list').should('not.have.descendants', 'li');
    });
});
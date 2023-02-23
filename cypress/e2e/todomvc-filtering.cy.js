/// <reference types='cypress' />

describe('filtering', () => {

    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/'); // ?delay-new-todo=5000    add a delay to the element todo

        cy.get('.new-todo').type("Cypress {enter}");
        cy.get('.new-todo').type("Automation {enter}");
        cy.get('.new-todo').type("Solvd {enter}");

        cy.get(':nth-child(2) > .view > .toggle').click();
    })

    it('Should have 2 actives todos', () => {
        cy.get(':nth-child(2) > a').click();
        cy.get('label').should('have.length', 2);
    });

});
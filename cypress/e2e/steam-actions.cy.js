/// <reference types = 'cypress' />

import  steamCart  from './steamCart.js';

describe('Taringa tests', () => {

    beforeEach(() => {
        cy.visit('https://store.steampowered.com/');
        cy.viewport(1440, 900)
    });

    it('Should open first post', () =>{
        cy.get('#store_search').type('cs');
        cy.get('a').contains('Counter-Strike: Global Offensive').click();

        cy.get('#appHubAppName').invoke('text').then((text) => {
            expect(text).to.eq('Counter-Strike: Global Offensive');
        });
    });

    
});


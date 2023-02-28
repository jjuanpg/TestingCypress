describe('Steam', ()=>{
    it('should launch and sign in', ()=>{
        cy.exec('open /Applications/Steam.app')
        cy.wait(10000)
        cy.type('asd')
    })
})

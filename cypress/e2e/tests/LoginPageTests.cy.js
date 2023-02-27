import LoginPage from "../pages/LoginPage";
describe('Testing Loginpage', ()=>{

    let loginPage = new LoginPage()
    beforeEach("navigate to steam login page", ()=>{
        cy.log('Navigating to login')
        loginPage.navigate("https://store.steampowered.com/login/");
        cy.log('Filling imputs')
        cy.get(loginPage.imputEmail).type('the4fantastiquest');
        cy.get(loginPage.imputPassword).type('testautomation{enter}');
        cy.wait(5000)
    })

   it('Should log off', ()=>{
       cy.get('#account_pulldown').click();
       cy.get('[href="javascript:Logout();"]').click()
   })



})


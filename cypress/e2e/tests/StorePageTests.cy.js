
import NavBarComponent from "../pages/components/NavBarComponent";
import LoginPage from "../pages/LoginPage";
import StorePage from "../pages/StorePage";
describe('Testing store page workflows' ,()=>{

    let loginPage = new LoginPage();
    let navBar = new NavBarComponent();
    let storePage = new StorePage();
    beforeEach("navigate to steam login page", ()=>{
        loginPage.login()
    })

    it('Should add an item to wishlist', ()=>{
        navBar.searchForProduct('Cyberpunk 2077')
        storePage.clickOnProduct();
        storePage.selectBirthdayAndViewProductpage();
        storePage.addProductToWishlist();
    })
    it('Should check my item is on wishlist', ()=>{
        navBar.clickOnElement(navBar.navItemStore)
        cy.get('#wishlist_link').click()
        cy.wait(3000)
        if(cy.get('.title').contains('Cyberpunk 2077')){
            cy.get('.delete').click()
            cy.get('.newmodal_buttons > .btn_green_steamui > span').click()
        }

        cy.get('#nothing_to_see_here > h2').should('be.visible')

    })
})
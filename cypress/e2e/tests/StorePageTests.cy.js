import StorePage from "../pages/StorePage";
import NavBarComponent from "../pages/components/NavBarComponent";
import LoginPage from "../pages/LoginPage";
describe('Testing store page workflows' ,()=>{
    let loginPage = new LoginPage();
    let navBar = new NavBarComponent();
    beforeEach("navigate to steam login page", ()=>{
        loginPage.navigate("https://store.steampowered.com/login/");
        cy.get(loginPage.imputEmail).type('the4fantastiquest');
        cy.get(loginPage.imputPassword).type('testautomation{enter}');
        cy.wait(5000)
    })

    it('Should add an item to wishlist', ()=>{
        navBar.clickOnElement(navBar.navItemStore)
        cy.get('#store_nav_search_term').type('Cyberpunk{enter}')
        cy.get('[href="https://store.steampowered.com/app/1091500/Cyberpunk_2077/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title').click()
        cy.get('#ageYear').eq(0).select('1992')
        cy.get('#view_product_page_btn > span').click()
        cy.get('#add_to_wishlist_area > .btnv6_blue_hoverfade > span').click()
        cy.wait(3000)
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
import BasePage from "../BasePage";

class NavBarComponent extends BasePage{
    navItemStore = '.supernav_container > [data-tooltip-content=".submenu_store"]'
    constructor() {
        super();
    }
    searchForProduct(product){
        this.navBar.clickOnElement(this.navBar.navItemStore)
        cy.get('#store_nav_search_term').type(product+'{enter}')
    }

}
export default NavBarComponent;
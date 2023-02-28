import BasePage from "./BasePage";
import NavBarComponent from "./components/NavBarComponent";
class StorePage extends BasePage{
    navBar = new NavBarComponent();
    constructor() {
        super();

    }

    clickOnProduct(){
        cy.get('[href="https://store.steampowered.com/app/1091500/Cyberpunk_2077/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title').click()
    }
    selectBirthdayAndViewProductpage(){
        cy.get('#ageYear').eq(0).select('1992')
        cy.get('#view_product_page_btn > span').click()
    }
    addProductToWishlist(){

        cy.get('#add_to_wishlist_area > .btnv6_blue_hoverfade > span').click()
        cy.wait(3000)
    }



}
export default StorePage
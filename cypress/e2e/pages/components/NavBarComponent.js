import BasePage from "../BasePage";

class NavBarComponent extends BasePage{
    navItemStore = '.supernav_container > [data-tooltip-content=".submenu_store"]'
    constructor() {
        super();
    }

}
export default NavBarComponent;
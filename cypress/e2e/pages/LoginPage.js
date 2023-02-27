import BasePage from "./BasePage";

class LoginPage extends BasePage{
    imputEmail = 'form > div > input[type="text"]';
    imputPassword = 'input[type="password"]';

    constructor() {
        super();
    }
}
export default LoginPage
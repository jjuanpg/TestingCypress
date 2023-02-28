 ///<reference types='cypress' />

 import HomePage from "../pages/HomePage";
 describe("Steam HomePage testing",() => {

     let homepage = new HomePage()
     beforeEach("navigate to steam", ()=>{
         homepage.navigate("https://store.steampowered.com");
     })
     it('Should navigate to steam and equals title', ()=>{
         assert(cy.title('eq', "Bienvenidos a Steam"))
     })
     it('Should navigate to login page by clicking login btn', ()=>{
         homepage.clickOnElement(homepage.loginBtn)
        assert(cy.title('eq', "Iniciar sesión"))

     })




 });
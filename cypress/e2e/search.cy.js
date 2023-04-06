import GooglePage from "../Pages/GooglePage"
import WikipediaPage from "../Pages/WikipediaPage"
import Actions from "../Utils/Actions"


describe('Login test', function(){
    it('success', () => {
        cy.visit("/")
        GooglePage.SearchWord("Automatización")
        GooglePage.SearchResultinList("wikipedia.org")

        //Cambio de dominio a Wikipedia
        cy.origin(WikipediaPage.url, () => {
            const WikipediaPage = Cypress.require('../Pages/WikipediaPage');
            const Actions = Cypress.require('../Utils/Actions');
            WikipediaPage.CheckTitle("Automatización")
            WikipediaPage.SearchHistoryNode()
            Actions.TakeScreenShot() 
        });
    });
})
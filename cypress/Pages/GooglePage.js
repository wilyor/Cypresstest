class GooglePage{
        elements ={
            "SearchBar" : '[name="q"]',
            "ResultElement" : 'span'
        }

        visit() {
            cy.visit("/")
        }

        SearchWord(word){
            cy.get(this.elements.SearchBar).type(word)
            cy.get(this.elements.SearchBar).type('{enter}')
            cy.wait(1000)
        }

        SearchResultinList(word){
            cy.get(this.elements.ResultElement).contains(word).first().click()
            cy.wait(1000)
        }
    }
    module.exports = new GooglePage();
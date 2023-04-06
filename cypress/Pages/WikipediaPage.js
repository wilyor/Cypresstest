require('@cypress/xpath');
class WikipediaPage {
    constructor() {
      this.url = "https://es.wikipedia.org"
    }

    elements ={
        "PageTitle" : '#firstHeading',
        "HistoryNode" : '//span[@id="Historia"]//parent::h2//following-sibling::p',
    }
    
    CheckTitle(word){
        cy.get(this.elements.PageTitle).contains(word)
    }

    SearchHistoryNode(){
        cy.xpath(this.elements.HistoryNode)
    }
  }
   
  module.exports = new WikipediaPage ()
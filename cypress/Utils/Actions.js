class Actions {
    TakeScreenShot(){
        cy.screenshot()
    }
  }
   
  module.exports = new Actions ()
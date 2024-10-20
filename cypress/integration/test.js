describe('Shruti Web Page Log Test', () => {
    it('Should log "Page loaded successfully"', () => {
      cy.visit('http://localhost:8080');
  
      // Capture console log
      cy.window().then((win) => {
        cy.stub(win.console, 'log').as('consoleLog');
      });
  
      cy.get('@consoleLog').should('be.calledWith', 'Page loaded successfully: Shruti Santosh, 2023MCS310005');
    });
  });
  
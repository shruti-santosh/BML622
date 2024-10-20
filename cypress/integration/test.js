describe('Shruti Web Page Log Test', () => {
  it('Should log "Page loaded successfully"', () => {
   
    cy.visit('shruti.html').window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });

    // Visit the web page
    cy.visit('shruti.html');

    // Check if the console log was called with the expected message
    cy.get('@consoleLog').should('be.calledWith', 'Page loaded successfully: Shruti Santosh, 2023MCS310005');
  });
});

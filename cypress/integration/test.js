describe('Shruti Web Page Log Test', () => {
  it('Should log "Page loaded successfully"', () => {
    // Visit the web page
    cy.visit('shruti.html');

    // Spy on the console log
    const consoleLog = cy.spy(console, 'log');

    // Assert that the log was called with the expected string
    cy.wait(1000);  // Allow some time for the log to appear
    cy.visit('shruti.html').then(() => {
      expect(consoleLog).to.have.been.calledWith('Page loaded successfully: Shruti Santosh, 2023MCS310005');
    });
  });
});

describe('Best Practice', () => {
  // https://docs.cypress.io/guides/references/best-practices

  beforeEach(() => {
    // example. remove cookie
    // cy.exec('echo "reset action or provisioning"');
  });

  it('successfully loads', () => {
    // Start from the index page
    cy.visit('/');

    // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="about"]').click();
    cy.findByText('About').click();

    // The new url should include "/about"
    cy.url().should('include', '/about');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page');
  });
});

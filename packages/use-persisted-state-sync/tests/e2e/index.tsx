/// <reference types="cypress" />

context('usePersistedStateSync', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Persists counter component state', () => {
    cy.visit('http://localhost:1234/use-persisted-state-sync/counter');

    cy.get('#count').should('have.text', '1');

    cy.get('#add-btn').click();
    cy.get('#add-btn').click();
    cy.get('#add-btn').click();
    cy.get('#add-btn').click();

    cy.get('#count').should('have.text', '5');

    cy.reload();

    cy.get('#count').should('have.text', '5');

    cy.get('#clear-btn').click();

    cy.get('#count').should('have.text', '5');

    cy.reload();

    cy.get('#count').should('have.text', '1');
  });

  it('Persists array component state', () => {
    cy.visit('http://localhost:1234/use-persisted-state-sync/add-to-array');

    cy.get('#count').should('have.text', '');

    cy.get('#add-btn').click();
    cy.get('#add-btn').click();
    cy.get('#add-btn').click();
    cy.get('#add-btn').click();
    cy.get('#add-btn').click();
    cy.get('#add-btn').click();

    cy.get('#count').should('have.text', '012345');

    cy.reload();

    cy.get('#count').should('have.text', '012345');

    cy.get('#clear-btn').click();

    cy.get('#count').should('have.text', '012345');

    cy.reload();

    cy.get('#count').should('have.text', '');
  });
});

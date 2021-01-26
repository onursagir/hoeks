/// <reference types="cypress" />
import * as idb from 'idb-keyval';
context('usePersistedState', () => {
  beforeEach(async () => {
    await idb.clear();
    // await idb.del('@userPersistedState/arrayOfObjects');
    // await idb.del('@userPersistedState/arrayOfObjects');
  });

  it('Persist complex objects', () => {
    cy.visit('http://localhost:1234/use-persisted-state/array-of-objects');

    cy.contains('Loading...');

    for (let i = 1; i <= 3; i++) {
      cy.get('#add-btn').click();
      cy.get('#people').snapshot();
      cy.reload();
      cy.get('#people').snapshot();
    }

    cy.get('#clear-btn').click();
    cy.get('#people').snapshot();
    cy.reload();
    cy.get('#people').snapshot();
  });

  it('Persist simple numbers', () => {
    cy.visit('http://localhost:1234/use-persisted-state/counter');

    cy.contains('Loading...');

    for (let i = 0; i < 5; i++) {
      cy.get('#add-btn').click();
      cy.get('#count').should('have.text', i + 1);
      cy.reload();
      cy.get('#count').should('have.text', i + 1);
    }

    cy.reload();
    cy.get('#count').should('have.text', 5);
    cy.get('#clear-btn').click();
    cy.get('#count').should('have.text', 5);
    cy.reload();
    cy.get('#count').should('have.text', 0);
  });
});

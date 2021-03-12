/// <reference types="cypress" />

const COUNT = '[data-testid=count]';
const ADD_BTN = '[data-testid=add-btn]';
const CLEAR_BTN = '[data-testid=clear-btn]';

context('usePersistedStateSync', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Persists counter component state', () => {
    cy.visit('http://localhost:1234/use-persisted-state-sync/counter');

    cy.get(COUNT).should('have.text', '1');

    cy.get(ADD_BTN).click().click().click().click();

    cy.get(COUNT).should('have.text', '5');

    cy.reload();

    cy.get(COUNT).should('have.text', '5');

    cy.get(CLEAR_BTN).click();

    cy.get(COUNT).should('have.text', '5');

    cy.reload();

    cy.get(COUNT).should('have.text', '1');
  });

  it('Persists array component state', () => {
    cy.visit('http://localhost:1234/use-persisted-state-sync/add-to-array');

    cy.get(COUNT).should('have.text', '');

    cy.get(ADD_BTN).click().click().click().click().click().click();

    cy.get(COUNT).should('have.text', '012345');

    cy.reload();

    cy.get(COUNT).should('have.text', '012345');

    cy.get(CLEAR_BTN).click();

    cy.get(COUNT).should('have.text', '012345');

    cy.reload();

    cy.get(COUNT).should('have.text', '');
  });
});

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    snapshot(): any;
  }
}

/// <reference types="cypress" />

context('useAbortableFetch', () => {
  it('Aborts a fetch call and stays usable afterwards', () => {
    cy.intercept('https://reqres.in/api/users').as('reqResUsers');
    cy.intercept('https://reqres.in/api/users/1').as('reqResUser');

    cy.visit('http://localhost:1234/use-abortable-fetch/json-placeholder');

    cy.get('#call-btn').click();
    cy.wait(['@reqResUsers']);
    cy.get('#message').snapshot();

    cy.get('#url').type('?delay=3');
    cy.get('#call-btn').click();
    cy.get('#abort-btn').click();
    cy.get('#message').snapshot();

    cy.get('#url').type('{selectall}{del}https://reqres.in/api/users/1');
    cy.get('#call-btn').click();
    cy.wait(['@reqResUser']);
    cy.get('#message').snapshot();

    cy.get('#url').type('?delay=3');
    cy.get('#call-btn').click();
    cy.get('#abort-btn').click();
    cy.get('#message').snapshot();
  });
});

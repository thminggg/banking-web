/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

import { selectors as accountListSelectors } from "../e2e/selectors/account-list";
import { selectors as homeSelectors } from "../e2e/selectors/home";

Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add(
  "login",
  (username = "Username", password = "password") => {
    cy.dataCy(homeSelectors.username).type(username);
    cy.dataCy(homeSelectors.password).type(password);
    cy.dataCy(homeSelectors.loginButton).click();
  }
);

Cypress.Commands.add("firstAccount", () => {
  cy.dataCy(accountListSelectors.accountGrid).children().first().click();
});

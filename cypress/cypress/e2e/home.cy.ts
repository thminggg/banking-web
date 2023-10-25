import { selectors } from "./selectors/home";

describe("Home", () => {
  const username = "Tom";

  it("should render", () => {
    cy.visit("/home");
    cy.dataCy(selectors.subtitle).should("be.visible");
    cy.dataCy(selectors.subtitle).contains("Please login your account");
    cy.dataCy(selectors.username).should("be.visible");
    cy.dataCy(selectors.password).should("be.visible");
  });

  it("should login", () => {
    cy.visit("/home");
    cy.login();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/account-list");
    });
  });

  it("should display username after login", () => {
    cy.visit("/home");
    cy.login(username);

    // Back to home page
    cy.visit("/home");
    cy.dataCy(selectors.subtitle).contains(`Welcome back ${username}`);
  });

  it("should save username in session storage", () => {
    cy.visit("/home");
    cy.login(username);

    // Back to home page
    cy.visit("/home");
    // Reload home page
    cy.reload();

    // Username is still displayed
    cy.dataCy(selectors.subtitle).contains(`Welcome back ${username}`);
  });

  it("should not login with missing fields", () => {
    cy.visit("/home");
    // Missing both username and password
    cy.dataCy(selectors.loginButton).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });

    // Missing username
    cy.dataCy(selectors.password).type("random");
    cy.dataCy(selectors.loginButton).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });
    cy.dataCy(selectors.password).clear();

    // Missing password
    cy.dataCy(selectors.username).type(username);
    cy.dataCy(selectors.loginButton).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });
    cy.dataCy(selectors.username).clear();
  });
});

import { selectors } from "./selectors/account-list";
import { selectors as homeSelectors } from "./selectors/home";

describe("Account List", () => {
  it("should render", () => {
    cy.visit("/home");
    cy.login();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/account-list");
    });

    // Validate elements
    for (const element in selectors) {
      cy.dataCy(selectors[element]).should("be.visible");
    }
  });

  it("should logout", () => {
    cy.visit("/home");
    cy.login();
    cy.dataCy(selectors.logoutButton).click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });
    cy.dataCy(homeSelectors.subtitle).contains("Please login your account");
  });

  it("should render accounts", () => {
    cy.visit("/home");
    cy.login();
    cy.dataCy(selectors.accountGrid).its("length").should("be.at.least", 1);
  });
});

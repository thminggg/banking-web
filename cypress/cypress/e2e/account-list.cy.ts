import { selectors } from "./selectors/account-list";
import { selectors as homeSelectors } from "./selectors/home";

describe("Account List", () => {
  const countryNameMap = {
    "Canada 🇨🇦": "CA",
    "United States of America 🇺🇸": "US",
    "Hong Kong 🇭🇰": "HK",
  };
  const countryNames = {
    CA: "Canada 🇨🇦",
    US: "United States of America 🇺🇸",
    HK: "Hong Kong 🇭🇰",
  };

  beforeEach(() => {
    cy.visit("/home");
    cy.login();
  });

  it("should render", () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/account-list");
    });

    // Validate elements
    for (const element in selectors) {
      cy.dataCy(selectors[element]).should("be.visible");
    }
  });

  it("should logout", () => {
    cy.dataCy(selectors.logoutButton).click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });
    cy.dataCy(homeSelectors.subtitle).contains("Please login your account");
  });

  it("should render accounts", () => {
    cy.dataCy(selectors.accountGrid).its("length").should("be.at.least", 1);
  });

  it("should navigate to account transactions", () => {
    // Get first account country
    cy.dataCy(selectors.accountCountry)
      .first()
      .invoke("text")
      .as("accountCountry");
    // Get first account ID
    cy.dataCy(selectors.accountId).first().invoke("text").as("accountId");

    // Click first account grid
    cy.dataCy(selectors.accountGrid).children().first().click();

    // Assert URL
    cy.get("@accountId").then((accountId) => {
      cy.get("@accountCountry").then((accountCountry) => {
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq(
            `/banking-web/account-transactions/${
              countryNameMap[String(accountCountry)]
            }_${accountId}`
          );
        });
      });
    });
  });

  it("should render currency format", () => {
    cy.contains(countryNames.CA)
      .parent()
      .within(() => {
        cy.dataCy(selectors.accountFormattedAmount)
          .first()
          .invoke("text")
          .should("not.include", "CA");
      });

    cy.contains(countryNames.US)
      .parent()
      .within(() => {
        cy.dataCy(selectors.accountFormattedAmount)
          .first()
          .invoke("text")
          .should("include", "US");
      });

    cy.contains(countryNames.HK)
      .parent()
      .within(() => {
        cy.dataCy(selectors.accountFormattedAmount)
          .first()
          .invoke("text")
          .should("include", "HK");
      });
  });
});

import { selectors } from "./selectors/account-transaction";

describe("Account Transactions", () => {
  beforeEach(() => {
    cy.visit("/home");
    cy.login();
    cy.firstAccount();
  });

  it("should render", () => {
    for (const element in selectors) {
      if (element === "transferDialog" || element === "eStatementLink")
        continue;
      cy.dataCy(selectors[element]).should("be.visible");
    }
  });

  it("should open transfer dialog", () => {
    cy.dataCy(selectors.transferButton).click();
    cy.dataCy(selectors.transferDialog).should("be.visible");
  });

  it("should open eSatement PDF", () => {
    // Assert eStatement link is opened is new tab by attribute
    cy.dataCy(selectors.eStatementLink).should("have.attr", "target", "_blank");

    // Get eStatement link
    cy.dataCy(selectors.eStatementLink)
      .invoke("attr", "href")
      .as("eStatementLink");

    // eStatement PDF is returned
    cy.get("@eStatementLink").then((link) => {
      const _link = `${link}`.replace("/banking-web", "");
      cy.request(`${_link}`).then((response) => {
        const mime = response.headers["content-type"];
        const size = parseInt(`${response.headers["content-length"]}`);

        expect(mime).to.eq("application/pdf");
        expect(size).to.be.greaterThan(1);
      });
    });

    // Make the PDF as download file for below actions
    cy.dataCy(selectors.eStatementLink).invoke("attr", "download", "random");

    // Click button that points to eStatement link
    cy.dataCy(selectors.eStatementButton).click();

    // Assert the file is downloaded
    cy.readFile("cypress/downloads/random.pdf");
  });
});

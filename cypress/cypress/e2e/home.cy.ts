describe("Home", () => {
  const selectors = {
    subtitle: `[data-cy="login-subtitle"]`,
    username: `[data-cy="login-username"]`,
    password: `[data-cy="login-password"]`,
    loginButton: `[data-cy="login-button"]`,
  };
  const username = "Tom";

  const login = () => {
    cy.get(selectors.username).type(username);
    cy.get(selectors.password).type("random password");
    cy.get(selectors.loginButton).click();
  };

  it("should render", () => {
    cy.visit("/home");
    cy.get(selectors.subtitle).should("be.visible");
    cy.get(selectors.subtitle).contains("Please login your account");
    cy.get(selectors.username).should("be.visible");
    cy.get(selectors.password).should("be.visible");
  });

  it("should login", () => {
    cy.visit("/home");
    login();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/account-list");
    });
  });

  it("should display username after login", () => {
    cy.visit("/home");
    login();

    // Back to home page
    cy.visit("/home");
    cy.get(selectors.subtitle).contains(`Welcome back ${username}`);
  });

  it("should save username in session storage", () => {
    cy.visit("/home");
    login();

    // Back to home page
    cy.visit("/home");
    // Reload home page
    cy.reload();

    // Username is still displayed
    cy.get(selectors.subtitle).contains(`Welcome back ${username}`);
  });

  it("should not login with missing fields", () => {
    cy.visit("/home");
    // Missing both username and password
    cy.get(selectors.loginButton).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });

    // Missing username
    cy.get(selectors.password).type("random");
    cy.get(selectors.loginButton).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });
    cy.get(selectors.password).clear();

    // Missing password
    cy.get(selectors.username).type(username);
    cy.get(selectors.loginButton).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/banking-web/home");
    });
    cy.get(selectors.username).clear();
  });
});

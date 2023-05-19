/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    Cypress.on(
      "uncaught:exception",
      (err) =>
        !err.message.includes("ResizeObserver loop") &&
        !err.message.includes("Error in protected function")
    );
    cy.visit("https://app.inkit.com/");
    cy.contains("Continue with Google").click();
    cy.origin("https://accounts.google.com", {}, () => {
      Cypress.on(
        "uncaught:exception",
        (err) =>
          !err.message.includes("ResizeObserver loop") &&
          !err.message.includes("Error in protected function")
      );

      cy.get("button:visible").eq(3).click();
      cy.wait(1000);
      cy.get('input[type="email"]').type("test@gmail.com", {
        log: false,
      });
    });
  });
});

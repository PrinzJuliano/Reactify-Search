describe("App", () => {
  it("check if app is rendering a welcome message", () => {
    cy.visit("/");
    cy.get(".App").contains("Search 707");
  });
});

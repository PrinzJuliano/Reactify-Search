describe("App", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", {
      fixture: "users.json",
    });
  });

  /* === Test Created with Cypress Studio === */
  it("Loads Data and presents Card", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("/");
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".search-box").clear();
    cy.get(".search-box").type("Leanne{enter}");
    cy.get(".card-container").contains("Leanne Graham");
    cy.get(".card-container").contains("Sincere@april.biz");
    /* ==== End Cypress Studio ==== */
  });
});

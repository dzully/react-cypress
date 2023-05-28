describe("template spec", () => {
  it("insert item into todo list", () => {
    // await page.goto("http://localhost:5173/");

    // await page.getByTestId("todoItemInput").click();
    // await page.getByTestId("todoItemInput").fill("cake");
    // await page.getByTestId("todoItemSubmit").click();
    // await page.waitForSelector("ul li:has-text('cake')");

    // await page.getByTestId("todoItemInput").click();
    // await page.getByTestId("todoItemInput").fill("pill");
    // await page.getByTestId("todoItemSubmit").click();
    // await page.waitForSelector("ul li:has-text('pill')");

    // await page.getByTestId("todoItemInput").click();
    // await page.getByTestId("todoItemInput").fill("rice");
    // await page.getByTestId("todoItemSubmit").click();
    // await page.waitForSelector("ul li:has-text('rice')");

    cy.visit("http://localhost:5174");
    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("cake");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("cake");

    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("pill");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("pill");

    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("rice");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("rice");

    cy.get("ul li").should("have.length", 3);
  });

  it("insert and search item in todo list", () => {
    cy.visit("http://localhost:5174");
    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("cake");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("cake");

    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("pill");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("pill");

    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("rice");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("rice");

    cy.get("ul li").should("have.length", 3);

    cy.get('[data-testid="todoItemSearch"]').click();
    cy.get('[data-testid="todoItemSearch"]').type("cake");
    cy.get("ul li").contains("cake");

    cy.get('[data-testid="todoItemSearch"]').click();
    cy.get('[data-testid="todoItemSearch"]').clear().type("pill");
    cy.get("ul li").contains("pill");

    cy.get('[data-testid="todoItemSearch"]').click();
    cy.get('[data-testid="todoItemSearch"]').clear().type("rice");
    cy.get("ul li").contains("rice");

    cy.get("ul li").should("have.length", 1);
  });

  it("insert, search and remove all item in todo list", () => {
    cy.visit("http://localhost:5174");
    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("cake");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("cake");

    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("pill");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("pill");

    cy.get('[data-testid="todoItemInput"]').click();
    cy.get('[data-testid="todoItemInput"]').type("rice");
    cy.get('[data-testid="todoItemSubmit"]').click();
    cy.get("ul li").contains("rice");

    cy.get("ul li").should("have.length", 3);

    cy.get('[data-testid="todoItemSearch"]').click();
    cy.get('[data-testid="todoItemSearch"]').type("cake");
    cy.get("ul li").contains("cake");

    cy.get('[data-testid="todoItemSearch"]').click();
    cy.get('[data-testid="todoItemSearch"]').clear().type("pill");
    cy.get("ul li").contains("pill");

    cy.get('[data-testid="todoItemSearch"]').click();
    cy.get('[data-testid="todoItemSearch"]').clear().type("rice");
    cy.get("ul li").contains("rice");

    cy.get("ul li").should("have.length", 1);

    cy.get('[data-testid="todoItemRemoveAll"]').click();
    cy.get("ul li").should("have.length", 0);
  });
});

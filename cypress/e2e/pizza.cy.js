describe("PizzaOrder", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/")
    })
    it('Logo should be visible on Home Page', () => {
    cy.get('[data-cy="logo"]').should('be.visible')
    })

    it("shows the headers", () => {
        cy.contains('KOD ACIKTIRIR')
        cy.contains('PİZZA, DOYURUR')
    })

    it("redirects to OrderPage", () => {
        cy.get('[data-cy="acıktımBtn"]').click()
        cy.url().should("include", "/order")
    })

})
context('Cypress studio tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Generate test code', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('#input').clear();
        cy.get('#input').type('Studio Cypress');
        cy.get('[data-cy="add-button"]').click();
        /* ==== End Cypress Studio ==== */

        // Assertions need to be added manually
        cy.get('li').should(($li) => {
            expect($li).to.have.length(2)
        });
    });
});

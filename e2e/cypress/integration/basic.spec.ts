context('Basic tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Add to do item', () => {
        cy.visit('/');
        cy.get('#input').click().type("Do laundry");
        cy.get('button').contains('Add Item').click();
        cy.get('li').last().contains("laundry");
    });

    it('Remove to do item', () => {
        cy.get('button').contains("Remove").last().click();
        cy.get('li').should(($li) => {
            expect($li).to.have.length(1)
        })
    });
});

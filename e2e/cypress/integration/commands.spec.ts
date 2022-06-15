context('Custom commands tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Add to do item', () => {
        cy.visit('/');
        cy.addToDo("Try custom commands!");
        cy.get('li').last().contains("custom");
    });

    it('Remove first to do item', () => {
        cy.removeNth(0);
        cy.get('li').should(($li) => {
            expect($li).to.have.length(1)
        })
    });
});

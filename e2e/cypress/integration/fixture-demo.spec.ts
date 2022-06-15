context('Fixture tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Add to do item', () => {
        cy.visit('/');
        cy.fixture('descriptions.json').then((descriptions) => {
            cy.addToDo(descriptions.first.description);
            cy.get('li').last().contains(descriptions.first.description);
        })
    });
});

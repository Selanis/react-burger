describe('modals spec', () => {
    before(function() {
        cy.visit('http://localhost:3000');
        cy.viewport(1920, 1080);
    });
    
    it('should render modal window with first ingredient and close with button', function() {
        cy.get('[class^=burger-card_burger_main__]').first().as("targetIngredient");
        cy.get("@targetIngredient").click();
        cy.get('[class^=modal_modal__close__] p').should('contain', 'Детали ингредиента');
        cy.get('[class^=modal_modal__close__] svg').last().click();
    });

    it('should render modal window with last ingredient and close with click on modal overlay', function() {
        cy.visit('http://localhost:3000');
        cy.viewport(1920, 1080);

        cy.get('[class^=burger-card_burger_main__]').last().as("targetIngredient");
        cy.get("@targetIngredient").click();
        cy.get('[class^=modal_modal__close__] p').should('contain', 'Детали ингредиента');
        cy.get('[class^=modal-overlay_modal_overlay__] svg').last().click();
    });
})

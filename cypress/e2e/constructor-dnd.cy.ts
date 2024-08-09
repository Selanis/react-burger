import '@4tw/cypress-drag-drop';

describe('Dnd and take order spec', () => {
  function dragFunction() {
    cy.visit('http://localhost:3000');
    cy.viewport(1920, 1080);
  
    cy.get('div[class^=burger-card_burger_main__]').first().as("draggableItemFirst");
    cy.get('div[class^=burger-card_burger_main__]').last().as("draggableItemSecond");
    cy.get('main section:first-child [class*=burger-ingredients_ingredients_grid_]:last-child div').first().as("draggableItemThird");
  
    cy.get('[class*=burger-constructor_constructor__main_container]').as("droppableItem");
  
    cy.get('@draggableItemFirst').drag('@droppableItem');
    cy.get('@draggableItemSecond').drag('@droppableItem');
  
    cy.get('@draggableItemThird').drag('@droppableItem');
    cy.get('@draggableItemSecond').drag('@droppableItem');
  }


  it('should drag element to container', dragFunction);

  

  it('should count and delete ingredients', function() {
    dragFunction();

    cy.get('main section:first-child [class*=burger-ingredients_ingredients_grid_]:last-child .counter p').last().should('contain', 2);

    cy.get("[class*=burger-constructor_scroll_Div] .constructor-element__action svg").last().click();
    cy.get('main section:first-child [class*=burger-ingredients_ingredients_grid_]:last-child .counter p').last().should('contain', 1);
  });

  it('should take order and show modal', function() {
    dragFunction();

    cy.get("[class*=burger-constructor_constructor__take_order__] button")
      .click();

    cy.get('[class*=modal_modal__] h1');
  });
});


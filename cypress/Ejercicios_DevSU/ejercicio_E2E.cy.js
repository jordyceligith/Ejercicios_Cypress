describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.contains('Nexus 6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Product added');

    });
    cy.visit('https://www.demoblaze.com/')
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Product added');

    })
    //ingreso al carrito 
    cy.get('#cartur').click();
    //ingresar al menu para rellenar datos de compra dando click al botón place Order
    cy.contains('Place Order').click();
    //Rellenar campos
    cy.get('#name').type('Jordy Celi');
    cy.get('#country').type('Ecuador');
    cy.get('#city').type('Loja');
    cy.get('#card').type('12312323123');
    cy.get('#month').type('24');
    cy.get('#year').type('2027');

    //Enviar pago
    cy.contains('Purchase').click();

    cy.contains('OK').click();
    cy.visit('https://www.demoblaze.com/')
  })
})
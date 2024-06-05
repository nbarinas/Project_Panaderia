describe('Proyecto final panadería', () => {
  it('Muestra todo los títulos del navbar', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid = "navbar-home"]').should("exist");   
    cy.get('[data-testid = "navbar-sedes"]').should("exist");
    cy.get('[data-testid = "navbar-menu"]').should("exist");
    cy.get('[data-testid = "navbar-orden"]').should("exist");
    cy.get('[data-testid = "navbar-registro"]').should("exist");
    cy.get('[data-testid = "navbar-carrito"]').should("exist");
  })
  it('Validar título de la página', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid = "body-titulo"]').should("have.text", "LE GRENIER À PAIN");   
  })
})
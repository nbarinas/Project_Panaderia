describe('Pruebas menú', () => {
    beforeEach(() => {
      //Abre baseURL
      cy.visit('/menu');
    })
    it('Valida la cantidad de elementos', () => {
        cy.get('figure').should('have.length', 20)
    })
    it('Valida la cantidad de imagenes y botones por elementos', () => {
        cy.get('figure').then(($figure) =>{
            const figureImg = $figure.find('img');
            const figureButton = $figure.find('button');

            expect(figureImg.length).to.equal(20);
            expect(figureButton.length).to.equal(20);
        })
    })
  })
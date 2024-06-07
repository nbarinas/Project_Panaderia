describe('Pruebas sedes', () => {
    beforeEach(() => {
      //Abre baseURL
      cy.visit('/Sedes');
    })
    it('Valida la cantidad de elementos', () => {
        cy.get('.list-group-flush').children('li').should('have.length', 5)
    })
    it('Valida los nombres de las sedes', () => {
        cy.get('.list-group-flush').children('li').then(($li)=>{
            expect($li.eq(0)).to.contain('Centro' );
            expect($li.eq(1)).to.contain('Chapinero' );
            expect($li.eq(2)).to.contain('Suba' );
            expect($li.eq(3)).to.contain('Salitre' );
            expect($li.eq(4)).to.contain('Bosa' )
        })
    })

    it('Valida los nombres de las sedes', () => {
        cy.get(':nth-child(1) > .btn')
        
    })
  })
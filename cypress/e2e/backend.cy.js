describe('Pruebas backend', () => {
    it('Valida el backend del menu', () => {
        cy.request('https://jdmed.github.io/api-menu/menu.json').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('Valida URLs de las sedes', ()=>{
        cy.request('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127243.06908047838!2d-74.24355621564197!3d4.7098385884310074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85ab1e8a0579%3A0x6c137c06b4958b64!2sHornitos%20Quirigua!5e0!3m2!1ses!2sco!4v1715217832143!5m2!1ses!2sco').then((response) => {expect(response.status).to.eq(200)})
        cy.request('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127247.12887666514!2d-74.23050995099354!3d4.687597608668757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b9ac3b53a93%3A0x88f52bb82823ef41!2sHornitos%20Modelia!5e0!3m2!1ses!2sco!4v1715217949661!5m2!1ses!2sco').then((response) => {expect(response.status).to.eq(200)})
        cy.request('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129921.01002601441!2d-74.23236393386988!3d4.686799539180736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99c46a390c51%3A0x77fecc3eb4f855a1!2sHornitos%20City%20U!5e0!3m2!1ses!2sco!4v1715220218396!5m2!1ses!2sco').then((response) => {expect(response.status).to.eq(200)})
        cy.request('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129922.95627889782!2d-74.24708647506237!3d4.676318523131498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f995fc2cc3269%3A0x34eca4efa8f5b2ff!2sHornitos%20Am%C3%A9ricas!5e0!3m2!1ses!2sco!4v1715220279736!5m2!1ses!2sco').then((response) => {expect(response.status).to.eq(200)})
        cy.request('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129922.95627889782!2d-74.24708647506237!3d4.676318523131498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd1fe336ce3%3A0x7727838965e506a2!2sHornitos%20Santa%20B%C3%A1rbara!5e0!3m2!1ses!2sco!4v1715220309248!5m2!1ses!2sco').then((response) => {expect(response.status).to.eq(200)})
    })
  })
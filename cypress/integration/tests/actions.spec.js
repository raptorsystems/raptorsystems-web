context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  // https://on.cypress.io/interacting-with-elements
  it('.type() - type into a DOM element', () => {
    cy.get('.pa-3').scrollIntoView().should('be.visible')
    cy.get('#input-100').type('MI NOMBRE').should('contain.value', 'MI NOMBRE')
    cy.get('#input-106')
      .type('correo@correo.com')
      .should('contain.value', 'correo@correo.com')
  })
})

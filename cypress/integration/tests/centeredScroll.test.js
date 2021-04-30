context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  // https://on.cypress.io/interacting-with-elements
  it('.type() - type into a DOM element', () => {
    cy.get('.pa-3').scrollIntoView({ offset: -70 }).should('be.visible')
  })
})

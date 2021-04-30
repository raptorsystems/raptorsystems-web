context('Snapshot transparency test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('Is transparent', () => {
    cy.get('.pa-3').scrollIntoView({ offset: -70 }).should('be.visible')
    cy.wait(1000)

    Cypress.$('.v-toolbar__content').hide()
    cy.wait(1000)
    cy.get('.pa-3').toMatchImageSnapshot({
      capture: 'viewport',
      blackout: ['[class=.v-toolbar__content]'],
    })
  })
  it('is ok', () => {
    cy.get('footer').scrollIntoView().should('be.visible')
    cy.wait(1000)
    cy.get('footer').toMatchImageSnapshot()
  })
})

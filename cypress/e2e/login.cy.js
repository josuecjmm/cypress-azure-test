describe('Login', () => {
    it('login positive', () => {
        cy.visit('http://sfc-admin-qa.herokuapp.com/')
        cy.get('#personalId').type('admin')
        cy.get('#password').type('admin')
        cy.get('[type="submit"]').click()
        cy.get('.navbar-brand').should('include.text', 'SFC ADMIN')
    })
})
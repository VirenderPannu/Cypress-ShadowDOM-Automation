describe('Example to demonstrate the handling of Shadow Dom in Cypress', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Input a text in the plan box and add it to todays list', () => {
        cy.get('#todo-app')
            .shadow()
            .find('#adds-item') 
            .shadow() 
            .find('#enter-text-area') 
            .type('Shadow DOM')
            .wait(2000)
        cy.get('#todo-app')
            .shadow()
            .find('#adds-item')
            .shadow()
            .find('.btn-enter')
            .click()
            .wait(2000)
        cy.end()
    })
})
